import Delivery from '../models/Delivery';
import File from '../models/File';
import Recipient from '../models/Recipient';

class DeliveryWithProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const deliveries = await Delivery.findAll({
      where: {
        problem: true,
      },
      order: ['id'],
      offset: (page - 1) * 10,
      attributes: [
        'id',
        'deliveryman_id',
        'product',
        'status',
        'start_date',
        'end_date',
        'canceled_at',
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
            'district',
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

export default new DeliveryWithProblemController();
