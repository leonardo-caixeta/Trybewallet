import { ADD_EXPENSE, CURRENCIES_WITHOUT_USDT } from '../actions';

export const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case CURRENCIES_WITHOUT_USDT: return {
    ...state,
    currencies: payload,
  };

  case ADD_EXPENSE: return {
    ...state,
    expenses: [...state.expenses, payload],
  };

  default: return { ...state };
  }
};

export default wallet;
