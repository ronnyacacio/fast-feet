import { produce } from 'immer';

const INITIAL_STATE = {
  recipients: [],
  loading: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/LOAD_SUCCESS': {
        draft.recipients = action.payload.recipients;
        draft.loading = false;
        break;
      }
      case '@recipient/DESTROY_REQUEST': {
        draft.loading = true;
        break;
      }
      default:
    }
  });
}
