import axios from 'axios';
import Swal from 'sweetalert2';

import { SEARCH_MEAL, GET_RANDOM_MEAL } from './types';
import { MEAL_API_URL } from '../../utils/common';

export const getRandomMeal = () => async (dispatch) => {
  try {
    const response =  await axios.get(`${MEAL_API_URL}random.php`);
    const { meals } = response.data;
    if (response.status === 200) {
      return dispatch({
        type: GET_RANDOM_MEAL,
        payload: meals[0]
      });
    }
  } catch (err) {
    if (err) {
      return Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: 'An error occured, please try again',
        showConfirmButton: false,
        timer: 2000,
        toast: true
      });
    }
  }
}

export const searchMeal = (searchTerm) => async (dispatch) => {
  try {
    const response =  await axios.get(`${MEAL_API_URL}search.php?s=${searchTerm}`);
    const { meals } = response.data;
    if (response.status === 200) {
      return dispatch({
        type: SEARCH_MEAL,
        payload: meals[0]
      });
    }
  } catch (err) {
    if (err) {
      return Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: 'Not found! try again',
        showConfirmButton: false,
        timer: 2000,
        toast: true
      });
    }
  }
}
