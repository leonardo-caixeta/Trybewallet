export const ADD_EMAIL = 'ADD_EMAIL';
export const START_FETCH = 'START_FETCH';
export const END_FETCH = 'END_FETCH';
export const CURRENCIES_WITHOUT_USDT = 'CURRENCIES_WITHOUT_USDT';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_DONE = 'EDIT_EXPENSE';
export const EDITING = 'EDITING';

export const addEmail = (email) => ({ type: ADD_EMAIL, payload: email });

export const getCurrencies = (currency) => ({
  type: CURRENCIES_WITHOUT_USDT,
  payload: currency,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const removeExpense = (expense) => ({
  type: REMOVE_EXPENSE,
  payload: expense,
});

export const startEdit = (expense) => ({
  type: EDITING,
  payload: expense,
});

export const editDone = (expense) => ({
  type: EDIT_DONE,
  payload: expense,
});
