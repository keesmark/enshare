import axios from "axios";

const apiUrl = "http://localhost:3000";

export const FETCH_GEARS_SUCCESS = "FETCH_GEARS_SUCCESS";
export const IS_FETCHING_GEARS = "IS_FETCHING_GEARS";
export const FETCH_GEARS_FAILURE = "FETCH_GEARS_FAILURE";

const isFetchingGears = bool => ({
  type: IS_FETCHING_GEARS,
  isFetchingGears: bool
});
const fetchGearsSuccess = gears => ({
  type: FETCH_GEARS_SUCCESS,
  gears
});
const fetchGearsFailure = bool => ({
  type: FETCH_GEARS_FAILURE,
  fetchGearsFailure: bool
});

export const createGear = gear => (dispatch, getState) => {
  axios
    .post(`${apiUrl}/api/v1/gears`, { gear })
    .then(response => {
      dispatch({ type: "CREATE_GEAR", gear });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getGears = () => {
  return dispatch => {
    dispatch(isFetchingGears(true));
    return axios
      .get(`${apiUrl}/api/v1/gears`)
      .then(response => {
        dispatch(isFetchingGears(false));
        dispatch(fetchGearsSuccess(response.data));
        console.log(response);
      })
      .catch(error => {
        dispatch(isFetchingGears(false));
        dispatch(fetchGearsFailure(true));
        console.log(error);
      });
  };
};
