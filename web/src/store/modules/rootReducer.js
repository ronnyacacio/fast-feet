import { combineReducers } from 'redux';

import auth from './auth/reducer';
import pageSelect from './pageSelect/reducer';
import delivery from './delivery/reducer';

export default combineReducers({ auth, pageSelect, delivery });
