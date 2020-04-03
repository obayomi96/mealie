import { SEARCH_MEAL, GET_RANDOM_MEAL } from '../actions/types';

export const initialState = {
  randomMeal: [],
  searchedMeal: [],
}

export const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_MEAL:
      return {
        ...state,
        randomMeal: action.payload,
      };
    case SEARCH_MEAL:
      return {
        ...state,
        searchedMeal: action.payload,
      }
    default:
      return state;
  }
};
