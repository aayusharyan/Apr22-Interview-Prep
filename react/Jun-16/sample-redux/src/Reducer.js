const initialState = {
  firstName: "",
  lastName: "",
  isLight: false
}

const Reducer = (state = initialState, action) => {

  switch(action.type) {
    case "SET_DARK_THEME":
      state.isLight = false;
      break;
    case "SET_LIGHT_THEME":
      state.isLight = true;
      break;
    case "SET_FIRST_NAME":
      state.firstName = action.payload;
      break;
    case "SET_LAST_NAME":
      state.lastName = action.payload;
      break;
    default:
      break;
  }

  return { ...state };
}

export default Reducer;