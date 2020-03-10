import { API_URL } from '../../utils/constants';
import { SET_PROPERTIES, SET_PROPERTIES_FAILURE, SET_PROPERTIES_SUCCESS } from './constants'


export const getProperties = () => ({
  type: SET_PROPERTIES
})

export const getPropertiesSuccess = (payload) => ({
  type: SET_PROPERTIES_SUCCESS,
  payload
});

export const getPropertiesFailure = (error) => ({
  type: SET_PROPERTIES_FAILURE,
  error
});

export const getPropertiesAction = () => (dispatch) => {
  dispatch({type: SET_PROPERTIES});

  fetch(`${API_URL}/properties`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: SET_PROPERTIES_SUCCESS, payload: data});
    })
    .catch(error => {
      dispatch({type: SET_PROPERTIES_FAILURE, error})
    })
}

