import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';
import Delivery from '../models/Delivery';

class RecipientController {
  async index(req, res) {
    const { name } = req.query;
    const recipients = await Recipient.findAll({
      where: {
        name: {
          [Op.like]: name ? `%${name}%` : '%%',
        },
      },
      attributes: [
        'id',
        'name',
        'state',
        'city',
        'street',
        'number',
        'complement',
        'cep',
      ],
    });

    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      cep: Yup.string().required().min(9).max(9),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const {
      id,
      name,
      state,
      city,
      district,
      street,
      number,
      complement,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      state,
      city,
      district,
      street,
      number,
      complement,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient)
      return res.status(400).json({ error: "Recipient don't exists" });

    const {
      name,
      state,
      city,
      district,
      street,
      number,
      complement,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      name,
      state,
      city,
      district,
      street,
      number,
      complement,
      cep,
    });
  }

  async destroy(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const deliveries = await Delivery.findAll({
      where: { recipient_id: req.params.id },
    });

    if (deliveries.length > 0)
      return res
        .status(400)
        .json({ error: 'Recipient still contains deliveries in his name' });

    await recipient.destroy();

    return res.json();
  }
}

export default new RecipientController();
