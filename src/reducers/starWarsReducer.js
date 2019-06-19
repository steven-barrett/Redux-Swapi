import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR
} from '../actions';

const initialState = {
  error: '',
  isLoading: false,
  characters: []  
};

export const charsReducer = (state = initialState, action) => {   
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case FETCH_CHARACTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Uh oh... something happened 😵!'
      };
    default:
      return state;
  }
};
