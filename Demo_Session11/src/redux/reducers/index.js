import { combineReducers } from "redux";
import { countReducer } from "./count";
import { randomReducer } from "./random";
import { themeReducer } from "./theme";

export const reducers = combineReducers({
  count: countReducer,
  random: randomReducer,
  theme: themeReducer,
});
