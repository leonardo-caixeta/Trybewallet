export const ADD_EMAIL = 'ADD_EMAIL';
export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const END_FETCH = 'END_FETCH';

export const addEmail = (email) => ({ type: ADD_EMAIL, payload: email });
const startFetch = () => ({ type: START_FETCH });
const successFetch = (currency) => ({
  type: SUCCESS_FETCH,
  payload: currency,
});
const endFetch = () => ({ type: END_FETCH });
export function apiFetch() {
  return async (dispatch) => {
    dispatch(startFetch());
    const API = 'https://economia.awesomeapi.com.br/json/all';
    const data = fetch(API);
    // .then((response) => response.json());
    const dataKeys = Object.keys(data);
    const removedUSDT = dataKeys.filter((currency) => currency !== 'USDT');
    console.log(removedUSDT);
    dispatch(successFetch(removedUSDT));
    dispatch(endFetch());
  };
}
