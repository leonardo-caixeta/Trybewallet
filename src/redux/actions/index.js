export const ADD_EMAIL = 'ADD_EMAIL';
export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const END_FETCH = 'END_FETCH';

export const addEmail = (email) => ({ type: ADD_EMAIL, payload: email });

export const successFetch = (currency) => ({
  type: SUCCESS_FETCH,
  payload: currency,
});
