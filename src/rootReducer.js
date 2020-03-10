import { combineReducers } from 'redux';

import properties from './pages/Properties/reducer';

const rootReducer = combineReducers({
  properties,
});

export default rootReducer;