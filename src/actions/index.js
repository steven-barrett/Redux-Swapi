import axios from 'axios';

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';

export const getCharacter = () => dispatch => {
  dispatch({ type: FETCH_CHARACTER_START });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {             
      dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results });
    })
    .catch(err => dispatch({ type: FETCH_CHARACTER_ERROR, payload: err }));
};
