const initalState = [];
export const randomReducer = (state = initalState, action) => {
  switch (action.type) {
    case "random": {
      return [...state, action.payload];
    }
  }
  return state;
};
