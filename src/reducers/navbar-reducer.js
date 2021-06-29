import { SHOW_DROP_TOGGLE } from "../actiontypes";

const initialState = { isToggle: false };

const navbar = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DROP_TOGGLE:
      return {
        ...state,
        isToggle: !state.isToggle
      };
    default:
      return state;
  }
}

export default navbar;