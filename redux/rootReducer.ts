import { combineReducers } from 'redux';

import AuthenticationSlice, { namespace as AuthenticationNameSpace } from './authentication/slice';

const rootReducer = {
  [AuthenticationNameSpace]: AuthenticationSlice,
};

export default rootReducer;
