import axios from 'axios';
import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './constant';

export const fetchTodos = () => {
  return async dispatch => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};
