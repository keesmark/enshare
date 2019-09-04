import authReducer from "./authReducer";
import gearReducer from "./gearReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  gear: gearReducer
});

export default rootReducer;
