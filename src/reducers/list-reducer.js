import { LIST_PAGE_LOADED, SEARCH_FIELD_CHANGE, ASYNC_TOGGLE, DELETE_EMPLOYEE } from "../actiontypes";

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
    case SEARCH_FIELD_CHANGE:
      return {
        ...state,
        searchText: action.payload
      };
    case ASYNC_TOGGLE:
      return {
        ...state,
        isAsync: !state.isAsync
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(el => el.id !== action.id)
      };
    default:
      return state;
  }
}

export default list;