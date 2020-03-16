import {
  SET_AGENTS,
  SET_AGENTS_SUCCESS,
  SET_AGENTS_FAILURE
} from './constants';

const initialState = {
  loading: false,
  payload: [],
  error: null
}

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case SET_AGENTS:
      return { ...state, loading: true }

    case SET_AGENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        payload
      }
      
    case SET_AGENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error
      }

    default:
      return state;
  }
}