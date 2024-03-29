import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliveryDeliveredController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const deliverymanId = req.params.id;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman does not exists' });

    const deliveries = await Delivery.findAll({
      where: {
        signature_id: { [Op.not]: null },
        deliveryman_id: deliverymanId,
      },
      order: ['end_date'],
      offset: (page - 1) * 10,
      attributes: [
        'id',
        'deliveryman_id',
        'product',
        'status',
        'start_date',
        'end_date',
        'canceled_at',
	'created_at',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'state',
            'city',
            'street',
            'number',
            'complement',
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'url', 'path'],
        },
      ],
    });

    return res.json(deliveries);
  }
}

export default new DeliveryDeliveredController();
