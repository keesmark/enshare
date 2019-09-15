import {
  FETCH_GEARS_SUCCESS,
  IS_FETCHING_GEARS,
  FETCH_GEARS_FAILURE
} from "../actions/gearActions";

const initState = {};

const gearReducer = (state = initState, action) => {
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
      return action.fetchPostsFailure;
    default:
      return state;
  }
}

export default gearReducer;
