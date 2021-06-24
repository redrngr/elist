import { SHOW_DROP } from "../actiontypes";

export default (state = { isToggle: false }, action) => {
  switch (action.type) {
    case SHOW_DROP:
      return {
        ...state,
        isToggle: true
      }
    default:
      return state;
  }
}