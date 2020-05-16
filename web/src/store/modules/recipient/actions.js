export function loadRecipientRequest(name) {
  return {
    type: '@recipient/LOAD_REQUEST',
    payload: { name },
  };
}

export function loadRecipientSuccess(recipients) {
  return {
    type: '@recipient/LOAD_SUCCESS',
    payload: { recipients },
  };
}
export function destroyRecipientRequest(id) {
  return {
    type: '@recipient/DESTROY_REQUEST',
    payload: { id },
  };
}
