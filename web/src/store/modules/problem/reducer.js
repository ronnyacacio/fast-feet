import { produce } from 'immer';

const INITIAL_STATE = {
  problems: [],
  loading: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problem/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@problem/LOAD_SUCCESS': {
        draft.problems = action.payload.problems;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
