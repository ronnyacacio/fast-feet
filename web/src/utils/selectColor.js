import colors from './palete';

export function setColor(status) {
  switch (status) {
    case 'ENTREGUE':
      return colors.colorStatus.delivered;
    case 'PENDENTE':
      return colors.colorStatus.pending;
    case 'RETIRADA':
      return colors.colorStatus.withdraw;
    case 'CANCELADO':
      return colors.colorStatus.canceled;
    default:
  }
}

export function setBackground(status) {
  switch (status) {
    case 'ENTREGUE':
      return colors.backgroundStatus.delivered;
    case 'PENDENTE':
      return colors.backgroundStatus.pending;
    case 'RETIRADA':
      return colors.backgroundStatus.withdraw;
    case 'CANCELADO':
      return colors.backgroundStatus.canceled;
    default:
  }
}
