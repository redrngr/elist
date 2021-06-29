import { GET_EMPLOYEE } from "../actiontypes";

const initialState = {
  employee: [],
};

const card = (state = initialState, action) => {
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