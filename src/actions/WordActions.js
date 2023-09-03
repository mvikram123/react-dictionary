export const SEARCH_WORD = 'SEARCH_WORD';

export const searchWord = (word) => {
  return {
    type: SEARCH_WORD,
    payload: word,
  };
};
