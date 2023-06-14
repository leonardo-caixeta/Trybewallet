import { END_FETCH, START_FETCH, SUCCESS_FETCH } from '../actions';

export const INITIAL_STATE = {
  currencies: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case START_FETCH: return { ...state };

  case SUCCESS_FETCH: return {
    ...state,
    currencies: payload,
  };

  case END_FETCH: return { ...state };

  default: return { ...state };
  }
};

export default wallet;
