import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      district: Yup.string().required(),
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
}

export default new RecipientController();
