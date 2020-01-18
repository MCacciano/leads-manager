import { CREATE_MESSAGE } from '../actions/types';

const initialState = {
  msg: {},
  status: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_MESSAGE:
      return (state = payload);
    default:
      return state;
  }
};
