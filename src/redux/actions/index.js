export const ADD_EMAIL = 'ADD_EMAIL';
export const START_FETCH = 'START_FETCH';
export const END_FETCH = 'END_FETCH';
export const CURRENCIES_WITHOUT_USDT = 'CURRENCIES_WITHOUT_USDT';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addEmail = (email) => ({ type: ADD_EMAIL, payload: email });

export const getCurrencies = (currency) => ({
  type: CURRENCIES_WITHOUT_USDT,
  payload: currency,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});
