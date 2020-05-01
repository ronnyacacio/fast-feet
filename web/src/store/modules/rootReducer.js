import { combineReducers } from 'redux';

import auth from './auth/reducer';
import pageSelect from './pageSelect/reducer';

export default combineReducers({ auth, pageSelect });
