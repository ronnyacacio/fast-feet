import { Op } from 'sequelize';
import * as Yup from 'yup';
import {
  startOfDay,
  endOfDay,
  parseISO,
  isBefore,
  isAfter,
  setHours,
  setMinutes,
  setSeconds,
} from 'date-fns';

import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';

class DeliveryWithDrawController {
  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { deliverymanId, deliveryId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery)
      return res.status(400).json({ error: 'Delivery does not exists' });

    if (delivery.start_date)
      return res.status(400).json({ error: 'Delivery already withdrawn' });

    if (delivery.end_date)
      return res.status(400).json({ error: 'Delivery already delivered' });

    if (delivery.canceled_at)
      return res.status(400).json({ error: 'Delivery already canceled' });

    if (Number(deliverymanId) !== delivery.deliveryman_id)
      return res.status(401).json({ error: 'Permission invalid' });

    const { count } = await Delivery.findAndCountAll({
      where: {
        deliveryman_id: deliverymanId,
        start_date: {
          [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
        },
      },
    });

    if (count === 5) {
      return res
        .status(400)
        .json({ error: 'Maximum number of withdrawals reached' });
    }

    const { start_date } = req.body;
    const start_date_ISO = parseISO(start_date);

    if (
      isBefore(
        start_date_ISO,
        setHours(setMinutes(setSeconds(new Date(), 59), 59), 7)
      ) ||
      isAfter(
        start_date_ISO,
        setHours(setMinutes(setSeconds(new Date(), 59), 59), 17)
      )
    )
      return res.status(400).json({ error: 'Time invalid' });

    await delivery.update({ start_date, status: 'RETIRADA' });

    return res.json(delivery);
  }
}

export default new DeliveryWithDrawController();
