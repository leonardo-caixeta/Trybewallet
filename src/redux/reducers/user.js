import { ADD_EMAIL } from '../actions';

export const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case ADD_EMAIL: return {
    ...state,
    email: payload,
  };

  default: return { ...state };
  }
};

export default user;
