import { SEARCH_WORD } from '../actions/WordActions';

const initialState = {
  searchedWord: '',
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        searchedWord: action.payload,
      };
    default:
      return state;
  }
};

export default wordReducer;
