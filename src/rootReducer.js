import { combineReducers } from 'redux';

import properties from './pages/Properties/reducer';
import agents from './pages/Agents/reducer';

const rootReducer = combineReducers({
  properties,
  agents
});

export default rootReducer;