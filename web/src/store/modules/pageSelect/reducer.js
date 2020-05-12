import { produce } from 'immer';

const INITIAL_STATE = {
  page: 'DELIVERY',
};

export default function pageSelect(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@pageSelect/CHANGE_PAGE': {
        draft.page = action.payload.page;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.page = 'DELIVERY';
        break;
      }
      default:
    }
  });
}