import axios from 'axios';
import { API_URL } from '../../utils/constants';
import {
  SET_PROPERTIES,
  SET_PROPERTIES_SUCCESS,
  SET_PROPERTIES_FAILURE
} from './constants'

export const getProperties = () => ({
  type: SET_PROPERTIES
})

export const getPropertiesSuccess = payload => ({
  type: SET_PROPERTIES_SUCCESS,
  payload
});

export const getPropertiesFailure = error => ({
  type: SET_PROPERTIES_FAILURE,
  error
});

export const getPropertiesAction = () => dispatch => {
  dispatch(getProperties());

  axios.get(`${API_URL}/properties`)
    .then(res => {
      dispatch(getPropertiesSuccess(res.data));
    })
    .catch(error => {
      dispatch(getPropertiesFailure({
        status: error.response.status,
        message: error.response.statusText
      }))
    })
}
