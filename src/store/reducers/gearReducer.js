import {
  FETCH_GEARS_SUCCESS,
  IS_FETCHING_GEARS,
  FETCH_GEARS_FAILURE,
  IS_FETCHING_GEAR,
  FETCH_GEAR_SUCCESS,
  FETCH_GEAR_FAILURE,
  DELETE_GEAR_SUCCESS,
  UPDATE_GEAR_SUCCESS
} from "../actions/gearActions";

const gearReducer = (state = [], action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "CREATE_GEAR":
      console.log("created gear", action.gear);
      return state;
    case "CREATE_GEAR_ERROR":
      console.log("create gear error", action.error);
      return state;
    default:
      return state;
  }
};

export function gears(state = [], action) {
  switch (action.type) {
    case FETCH_GEARS_SUCCESS:
      return action.gears;
    case "CREATE_GEAR":
      return [action.gear, ...state];
    case DELETE_GEAR_SUCCESS:
      return state.filter(gear => gear.id !== action.id);
    case UPDATE_GEAR_SUCCESS:
      return state.map(gear => {
        if (gear.id === action.gear.id) {
          return {
            ...gear,
            ...action.gear
          };
        } else return gear;
      });
    default:
      return state;
  }
}

export function isFetchingGears(state = false, action) {
  switch (action.type) {
    case IS_FETCHING_GEARS:
      return action.isFetchingGears;
    default:
      return state;
  }
}

export function fetchGearsFailure(state = false, action) {
  switch (action.type) {
    case FETCH_GEARS_FAILURE:
      return action.fetchGearsFailure;
    default:
      return state;
  }
}

export function isFetchingGear(state = false, action) {
  switch (action.type) {
    case IS_FETCHING_GEAR:
      return action.isFetchingGear;
    default:
      return state;
  }
}

export function gear(state = {}, action) {
  switch (action.type) {
    case FETCH_GEAR_SUCCESS:
      return action.gear;
    default:
      return state;
  }
}

export function fetchGearFailure(state = false, action) {
  switch (action.type) {
    case FETCH_GEAR_FAILURE:
      return action.fetchGearFailure;
    default:
      return state;
  }
}

export default gearReducer;
