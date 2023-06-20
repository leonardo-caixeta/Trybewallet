import {
  ADD_EXPENSE,
  CURRENCIES_WITHOUT_USDT,
  EDITING,
  EDIT_DONE,
  REMOVE_EXPENSE,
} from '../actions';

export const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseToEdit: null,
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

  case REMOVE_EXPENSE: return {
    ...state,
    expenses: state.expenses.filter((e) => e.id !== payload),
  };

  case EDITING: return {
    ...state,
    expenseToEdit: payload,
  };

  case EDIT_DONE: return {
    ...state,
    expenses: state.expenses.map((e) => {
      if (e.id === payload.id) {
        return payload;
      }
      return e;
    }),
  };

  default: return { ...state };
  }
};

export default wallet;
