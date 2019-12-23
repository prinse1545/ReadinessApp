import { combineReducers } from 'redux';

import user from './user';
import day from './day'

export default combineReducers({
  user,
  day
})
