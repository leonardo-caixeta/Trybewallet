import { SUCCESS_FETCH } from '../actions';

export const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case SUCCESS_FETCH: return {
    ...state,
    currencies: payload,
  };

  default: return { ...state };
  }
};

export default wallet;
