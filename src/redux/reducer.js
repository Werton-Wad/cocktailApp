import { actions } from './actions';

const initialState = {
  list: [],
  isListLoaded: false,
}

export const cocktailReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.fetchAll:
      return {
        ...state,
        list: action.payload,
        isListLoaded: true,
      };

    default:
      return state;
  }
}