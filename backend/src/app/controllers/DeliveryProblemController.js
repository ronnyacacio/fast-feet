import Problem from '../schemas/Problem';
import Delivery from '../models/Delivery';

class DeliveryProblemController {
  async index(req, res) {
    const { delivery_id } = req.params;

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery)
      return res.status(400).json({ error: 'Delivery does not exists' });

    const problems = await Problem.find({
      delivery_id,
    });

    return res.json(problems);
  }
}

export default new DeliveryProblemController();
