import {
  LIST_PAGE_LOADED,
  ASYNC_TOGGLE,
  DELETE_EMPLOYEE
} from "../actiontypes";

import agent from '../agent';

const initialState = {
  employees: [],
  searchText: ''
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PAGE_LOADED:
      return {
        ...state,
        employees: action.payload
      };
    case ASYNC_TOGGLE:
      return {
        ...state,
        inProgress: action.inProgress
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

export const loadAC = (payload) => ({ type: LIST_PAGE_LOADED, payload });
export const asyncAC = (inProgress) => ({ type: ASYNC_TOGGLE, inProgress });
export const deleteCardAC = (payload, id) => ({ type: DELETE_EMPLOYEE, payload, id });


export const getEmployees = () => (dispatch) => {
  dispatch(asyncAC(true));
  agent.Employees.all()
    .then(res => {
      dispatch(asyncAC(false));
      dispatch(loadAC(res.data));
    });
}

export const searchEmployee = (text) => (dispatch) => {
  dispatch(asyncAC(true));
  agent.Employees.search(text)
    .then(res => {
      dispatch(asyncAC(false));
      dispatch(loadAC(res.data));
    });
}

export const deleteEmployee = (id) => (dispatch) => {
  dispatch(deleteCardAC(agent.Employees.delete(id), id));
}

export default list;


