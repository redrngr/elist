import { LOGIN } from "../actiontypes";


const auth = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        employee: action.payload
      };
    default:
      return state;
  }
}

export default auth;