import Delivery from '../models/Delivery';
import Problem from '../schemas/Problem';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

import CancelDeliveryMail from '../jobs/CancelDeliveryMail';
import Queue from '../../lib/Queue';

class CancelDelivery {
  async destroy(req, res) {
    const { problem_id } = req.params;

    const problem = await Problem.findById(problem_id);

    if (!problem)
      return res.status(400).json({ error: 'Problem does not exists' });

    const { delivery_id } = problem;

    const delivery = await Delivery.findByPk(delivery_id, {
      attributes: ['id', 'product', 'canceled_at'],
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'district', 'city', 'state'],
        },
      ],
    });

    if (!delivery)
      return res.status(400).json({ error: 'Delivery does not exists' });

    if (delivery.canceled_at)
      return res
        .status(400)
        .json({ error: 'This delivery has already been canceled' });

    await delivery.update({
      id: delivery_id,
      canceled_at: new Date(),
      status: 'CANCELADO',
    });

    await Queue.add(CancelDeliveryMail.key, {
      delivery,
    });

    return res.json();
  }
}

export default new CancelDelivery();
