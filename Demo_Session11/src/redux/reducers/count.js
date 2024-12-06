const initalState = 0;

export const countReducer = (state = initalState, action) => {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }
  }
  return state;
};
