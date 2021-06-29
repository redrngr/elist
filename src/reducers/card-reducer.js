import { GET_EMPLOYEE } from "../actiontypes";


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

export default card;