export function loadProblemRequest() {
  return {
    type: '@problem/LOAD_REQUEST',
  };
}

export function loadProblemSuccess(problems) {
  return {
    type: '@problem/LOAD_SUCCESS',
    payload: { problems },
  };
}
export function cancelDeliveryRequest(id) {
  return {
    type: '@problem/CANCEL_DELIVERY_REQUEST',
    payload: { id },
  };
}
