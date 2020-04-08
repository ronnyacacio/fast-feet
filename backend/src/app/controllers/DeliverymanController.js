import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    const delivarymans = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return res.json(delivarymans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists)
      return res.status(400).json({ error: 'Deliveryman already exists' });

    const { name, email } = await Deliveryman.create(req.body);

    return res.json({ name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman)
      return res.status(400).json({ error: "Deliveryman don't exists" });

    const { name, email } = await deliveryman.update(req.body);

    return res.json({ name, email });
  }
}

export default new DeliverymanController();
