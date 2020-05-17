export function loadDeliverymanRequest(name) {
  return {
    type: '@deliveryman/LOAD_REQUEST',
    payload: { name },
  };
}

export function loadDeliverymanSuccess(deliverymans) {
  return {
    type: '@deliveryman/LOAD_SUCCESS',
    payload: { deliverymans },
  };
}
export function destroyDeliverymanRequest(id) {
  return {
    type: '@deliveryman/DESTROY_REQUEST',
    payload: { id },
  };
}

export function destroyDeliverymanFailure() {
  return {
    type: '@deliveryman/DESTROY_FAILURE',
  };
}
