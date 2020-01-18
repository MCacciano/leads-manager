import { CREATE_MESSAGE, GET_ERRORS } from './types';

export const createMessage = message => ({
  type: CREATE_MESSAGE,
  payload: message
});

// return errors
export const returnErrors = (msg, status) => ({
  type: GET_ERRORS,
  payload: { msg, status }
});
