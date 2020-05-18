import { Op } from 'sequelize';
import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import File from '../models/File';

class DeliveryFinishController {
  async update(req, res) {
    const schema = Yup.object().shape({
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { deliverymanId, deliveryId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const delivery = await Delivery.findOne({
      where: {
        id: deliveryId,
        start_date: { [Op.not]: null },
        signature_id: null,
      },
      attributes: ['deliveryman_id', 'start_date', 'canceled_at'],
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    if (Number(deliverymanId) !== delivery.deliveryman_id) {
      return res.status(401).json({ error: 'permission invalid' });
    }

    if (!delivery.start_date)
      return res
        .status(400)
        .json({ error: 'This delivery has not yet been withdram' });

    console.log('OLA', delivery.canceled_at);

    if (delivery.canceled_at)
      return res.status(400).json({ error: 'Delivery already canceled' });

    const { signature_id } = req.body;

    const signatureImage = await File.findByPk(signature_id);

    if (!signatureImage)
      return res.status(400).json({ error: 'Signature image does not exists' });

    await delivery.update({
      id: deliveryId,
      end_date: new Date(),
      signature_id,
      status: 'ENTREGUE',
    });

    return res.json(delivery);
  }
}

export default new DeliveryFinishController();
