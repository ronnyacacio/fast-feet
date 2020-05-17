import { produce } from 'immer';

const INITIAL_STATE = {
  deliverymans: [],
  loading: false,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/LOAD_SUCCESS': {
        draft.deliverymans = action.payload.deliverymans;
        draft.loading = false;
        break;
      }
      case '@deliveryman/DESTROY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/DESTROY_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
