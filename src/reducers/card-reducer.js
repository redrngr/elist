import { DELETE_EMPLOYEE, GET_EMPLOYEE } from "../actiontypes";
import agent from '../agent';


const card = (state = {}, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };
    default:
      return state;
  }
}

export const getEmployeeAC = (payload) => ({ type: GET_EMPLOYEE, payload });
export const deleteCardAC = (payload, id) => ({ type: DELETE_EMPLOYEE, payload, id });

export const getEmployee = (id) => (dispatch) => {
  agent.Employees.one(id)
    .then(res => dispatch(getEmployeeAC(res.data)));
}

export const deleteCard = (id) => (dispatch) => {
  dispatch(deleteCardAC(agent.Employees.delete(id), id));
}

export default card;