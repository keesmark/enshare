import authReducer from "./authReducer";
import gearReducer from "./gearReducer";
import { gears, fetchGearsFailure, isFetchingGears } from "./gearReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  gear: gearReducer,
  gears,
  fetchGearsFailure,
  isFetchingGears
});

export default rootReducer;
