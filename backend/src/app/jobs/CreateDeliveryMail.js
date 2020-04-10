import Mail from '../../lib/Mail';

class CreateDeliveryMail {
  get key() {
    return 'CreateDeliveryMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman, recipient } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Encomenda cadastrada',
      template: 'createDelivery',
      context: {
        deliveryman: deliveryman.name,
        product: delivery.product,
        recipient: recipient.name,
        street: recipient.street,
        number: recipient.number,
        district: recipient.district,
        city: recipient.city,
        state: recipient.state,
      },
    });
  }
}

export default new CreateDeliveryMail();
