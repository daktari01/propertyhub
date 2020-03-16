import axios from 'axios';
import { API_URL } from '../../utils/constants';
import {
  SET_AGENTS,
  SET_AGENTS_SUCCESS,
  SET_AGENTS_FAILURE
} from './constants';

export const getAgents = () => ({
  type: SET_AGENTS
});

export const getAgentsSuccess = payload => ({
  type: SET_AGENTS_SUCCESS,
  payload
});

export const getAgentsFailure = error => ({
  type: SET_AGENTS_FAILURE,
  error
});

export const getAgentsAction = () => dispatch => {
  dispatch(getAgents());

  axios.get(`${API_URL}/agents`)
    .then(res => {
      dispatch(getAgentsSuccess(res.data));
    })
    .catch(error => {
      dispatch(getAgentsFailure({
        status: error.response.status,
        message: error.response.statusText
      }))
    })
}
