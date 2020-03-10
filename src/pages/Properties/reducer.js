import {
  SET_PROPERTIES,
  SET_PROPERTIES_SUCCESS,
  SET_PROPERTIES_FAILURE
} from './constants';

const initialState = {
  loading: false,
  payload: [],
  error: null
};

export default (state = initialState, action) => {
  const { type, payload, error } = action
  switch(type) {
    case SET_PROPERTIES:
      return {...state, loading: true}
    case SET_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        payload
      };
    case SET_PROPERTIES_FAILURE:
      return {
        ...state,
        loading: false,
        error
      }
    default:
      return state;
  }
}