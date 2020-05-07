export function destroyDeliveryRequest(id) {
  return {
    type: '@delivery/DESTROY_REQUEST',
    payload: { id },
  };
}

export function destroyDeliverySuccess(deliveries) {
  return {
    type: '@delivery/DESTROY_SUCCESS',
    payload: { deliveries },
  };
}
