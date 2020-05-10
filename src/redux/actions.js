import axios from 'axios';

import config from 'config';

export const actions = {
  fetchAll: 'FETCH_COCKTAILS',
  fetchOne: 'FETCH_COCKTAIL',
};


export const fetchCocktails = (letter) => {
  return async (dispatch) => {
    try {
      const { data: cocktails } = await axios(`${config.apiCoctailSearch}${letter}`)
      dispatch({ type: actions.fetchAll, payload: cocktails.drinks});
    } catch (error) {
      console.log(error);
    }
  }
}
export const fetchCocktail = (id) => {
  return async (dispatch) => {
    try {
      const { data: cocktail } = await axios(`${config.apiCoctailLookup}${id}`)
      dispatch({ type: actions.fetchOne, payload: cocktail.drinks[0]});
    } catch (error) {
      console.log(error);
    }
  }
}
