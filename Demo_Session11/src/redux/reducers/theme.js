const initalState = "white";
export const themeReducer = (state = initalState, action) => {
  switch (action.type) {
    case "theme": {
      return action.payload;
    }
  }
  return state;
};
