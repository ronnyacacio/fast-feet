import { produce } from 'immer';

const INITIAL_STATE = {
  deliveries: [],
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/LOAD_SUCCESS': {
        draft.deliveries = action.payload.deliveries;
        draft.loading = false;
        break;
      }
      case '@delivery/DESTROY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/DESTROY_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
