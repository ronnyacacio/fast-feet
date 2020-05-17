export function loadDeliveryRequest(product) {
  return {
    type: '@delivery/LOAD_REQUEST',
    payload: { product },
  };
}

export function loadDeliverySuccess(deliveries) {
  return {
    type: '@delivery/LOAD_SUCCESS',
    payload: { deliveries },
  };
}
export function destroyDeliveryRequest(id) {
  return {
    type: '@delivery/DESTROY_REQUEST',
    payload: { id },
  };
}

export function destroyDeliveryFailure() {
  return {
    type: '@delivery/DESTROY_FAILURE',
  };
}
