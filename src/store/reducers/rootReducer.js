import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gearReducer from "./gearReducer";
import {
  gears,
  fetchGearsFailure,
  isFetchingGears,
  gear,
  fetchGearFailure,
  isFetchingGear
} from "./gearReducer";
// import history from "../../history";

const rootReducer = combineReducers({
  auth: authReducer,
  gear: gearReducer,
  gears,
  fetchGearsFailure,
  isFetchingGears,
  // eslint-disable-next-line
  gear,
  fetchGearFailure,
  isFetchingGear
  // history
});

export default rootReducer;
