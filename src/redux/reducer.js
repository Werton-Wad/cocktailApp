import { actions } from './actions';

const initialState = {
  list: [],
  isListLoaded: false,
  item: {},
}

export const cocktailReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.fetchAll:
      return {
        ...state,
        list: action.payload,
        isListLoaded: true,
      };

      case actions.fetchOne:
        return {
          ...state,
          item: action.payload,
        };

    default:
      return state;
  }
}