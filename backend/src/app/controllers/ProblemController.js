import * as Yup from 'yup';

import Problem from '../schemas/Problem';
import Delivery from '../models/Delivery';

class ProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { delivery_id } = req.params;

    const delivery = await Delivery.findByPk(delivery_id, {
      attributes: ['start_date', 'canceled_at', 'end_date'],
    });

    if (!delivery)
      return res.status(400).json({ error: 'Delivery does not exists' });

    if (!delivery.start_date)
      return res
        .status(400)
        .json({ error: 'This delivery has not been withdrawn' });

    if (delivery.canceled_at)
      return res
        .status(400)
        .json({ error: 'This delivery already be canceled' });

    if (delivery.end_date)
      return res
        .status(400)
        .json({ error: 'This delivery has already been delivered' });

    const { description } = req.body;

    const problem = await Problem.create({ delivery_id, description });

    await delivery.update({
      id: delivery_id,
      problem: true,
    });

    return res.json(problem);
  }
}

export default new ProblemController();
