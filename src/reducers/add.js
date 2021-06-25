import { ADD_EMPLOYEE } from "../actiontypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state }
    default:
      return state;
  }
}