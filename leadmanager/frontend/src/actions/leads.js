import axios from 'axios';

import { createMessage, returnErrors } from './messages';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

export const getLeads = () => dispatch => {
  axios
    .get('/api/leads')
    .then(res =>
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(
        returnErrors({ msg: err.response.data, status: err.response.status })
      )
    );
};

export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(data => {
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({ type: DELETE_LEAD });
    })
    .catch(err => console.log(err));
};

export const addLead = lead => dispatch => {
  axios
    .post(`/api/leads/`, lead)
    .then(res => {
      dispatch(createMessage({ addLead: 'Lead Added' }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(
        returnErrors({ msg: err.response.data, status: err.response.status })
      )
    );
};
