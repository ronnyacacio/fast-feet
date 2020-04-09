import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import Mail from '../../lib/Mail';

class DeliveryController {
  async index(req, res) {
    const deliveries = await Delivery.findAll({
      order: ['id'],
      attributes: [
        'id',
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
            'street',
            'district',
            'number',
            'city',
            'state',
            'cep',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
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

  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { product, recipient_id, deliveryman_id } = req.body;

    const recipient = await Recipient.findByPk(recipient_id, {
      attributes: ['name', 'street', 'number', 'district', 'city', 'state'],
    });

    if (!recipient)
      return res.status(400).json({ error: 'Recipient does not exists' });

    const deliveryman = await Deliveryman.findByPk(deliveryman_id, {
      attributes: ['name'],
    });

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman does not exists' });

    const delivery = await Delivery.create({
      product,
      recipient_id,
      deliveryman_id,
      status: 'PENDENTE',
    });

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Encomenda cadastrada',
      template: 'createDelivery',
      context: {
        deliveryman: deliveryman.name,
        recipient: recipient.name,
        street: recipient.street,
        number: recipient.number,
        district: recipient.district,
        city: recipient.city,
        state: recipient.state,
      },
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const delivery = await Delivery.findByPk(req.params.id);

    if (!delivery)
      return res.status(400).json({ error: 'Delivery does not exists' });

    const { product, recipient_id, deliveryman_id } = req.body;

    await delivery.update({ product, recipient_id, deliveryman_id });

    return res.json(delivery);
  }

  async destroy(req, res) {
    const delivery = await Delivery.findByPk(req.params.id);

    if (!delivery)
      return res.status(400).json({ error: 'Delivery does not exists' });

    if (delivery.start_date)
      return res.status(400).json({ error: 'This Delivery already been sent' });

    await delivery.destroy();

    return res.json();
  }
}

export default new DeliveryController();
