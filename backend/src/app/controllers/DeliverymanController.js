import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const { name } = req.query;
    const delivarymans = await Deliveryman.findAll({
      where: {
        name: {
          [Op.like]: name ? `%${name}%` : '%%',
        },
      },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(delivarymans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists)
      return res.status(400).json({ error: 'Deliveryman already exists' });

    if (req.body.avatar_id) {
      const avatarExists = await File.findByPk(req.body.avatar_id);

      if (!avatarExists)
        return res.status(400).json({ error: 'File not exists' });
    }

    const { name, email } = await Deliveryman.create(req.body);

    return res.json({ name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      avatar_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman)
      return res.status(400).json({ error: "Deliveryman don't exists" });

    const checkIsDeliveryman = await Deliveryman.findOne({
      where: {
        email: deliveryman.email,
      },
    });

    if (checkIsDeliveryman && checkIsDeliveryman.id === req.params.id)
      return res
        .status(400)
        .json({ error: 'There is already a deliveryman with that email' });

    const { id, name, email } = await deliveryman.update(req.body);

    return res.json({ id, name, email });
  }

  async destroy(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const deliveries = await Delivery.findAll({
      where: { deliveryman_id: req.params.id },
    });

    console.log(deliveries);

    if (deliveries.length > 0)
      return res
        .status(400)
        .json({ error: 'Deliveryman still contains deliveries in his name' });

    await deliveryman.destroy();

    return res.json();
  }
}

export default new DeliverymanController();
