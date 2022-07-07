const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      state.counter += 1;
      break;
    case "DECREMENT":
      state.counter -= 1;
      break;
    default:
      break;
  }
  return { ...state };
}

export default reducer;