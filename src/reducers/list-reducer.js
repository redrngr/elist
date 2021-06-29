import { LIST_PAGE_LOADED, SEARCH_TEXT_CHANGE, ASYNC_TOGGLE } from "../actiontypes";

const initialState = {
  employees: [],
  searchText: '',
  isAsync: false
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PAGE_LOADED:
      return {
        ...state,
        employees: action.payload
      };
    case SEARCH_TEXT_CHANGE:
      return {
        ...state,
        searchText: action.payload
      };
    case ASYNC_TOGGLE:
      return {
        ...state,
        isAsync: !state.isAsync
      };
    default:
      return state;
  }
}

export default list;