import axios from 'axios';

import config from 'config';

export const actions = {
  fetchAll: 'FETCH_COCKTAILS',
};


export const fetchCocktails = (letter) => {
  return async (dispatch) => {
    try {
      const { data: cocktails } = await axios(`${config.apiCoctailSearch}${letter}`)
      dispatch({ type: actions.fetchAll, payload: cocktails });
    } catch (error) {
      console.log(error);
    }
  }
}