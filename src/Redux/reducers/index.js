import { combineReducers } from 'redux';
import { mealReducer } from './mealReducers';

const rootReducers = combineReducers({
  meal: mealReducer
});

export default rootReducers;
