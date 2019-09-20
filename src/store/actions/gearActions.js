import axios from "axios";
import history from "../../history";

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
function refreshPage() {
  window.location.reload(false);
}
export const createGear = gear => dispatch => {
  axios
    .post(`${apiUrl}/api/v1/gears`, { gear })
    .then(response => {
      dispatch({ type: "CREATE_GEAR", gear });
    })
    .then(() => {
      history.push("/");
      refreshPage();
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
      })
      .catch(error => {
        dispatch(isFetchingGears(false));
        dispatch(fetchGearsFailure(true));
      });
  };
};

export const FETCH_GEAR_SUCCESS = "FETCH_GEAR_SUCCESS";
export const IS_FETCHING_GEAR = "IS_FETCHING_GEAR";
export const FETCH_GEAR_FAILURE = "FETCH_GEAR_FAILURE";

// action creators
const fetchGearSuccess = gear => ({
  type: FETCH_GEAR_SUCCESS,
  gear
});

const fetchGearFailure = bool => ({
  type: FETCH_GEAR_FAILURE,
  fetchGearFailure: bool
});

const isFetchingGear = bool => ({
  type: IS_FETCHING_GEAR,
  isFetchingGear: bool
});

export const getGear = id => {
  return dispatch => {
    dispatch(isFetchingGear(true));
    return axios
      .get(`${apiUrl}/api/v1/gears/${id}`)
      .then(response => {
        dispatch(isFetchingGear(false));
        dispatch(fetchGearSuccess(response.data));
      })
      .catch(error => {
        dispatch(isFetchingGear(false));
        dispatch(fetchGearFailure(true));
      });
  };
};

export const DELETE_GEAR_SUCCESS = "DELETE_GEAR_SUCCESS";

const deleteGearSuccess = id => ({
  type: DELETE_GEAR_SUCCESS,
  id
});

export const deleteGear = id => {
  return dispatch => {
    return axios
      .delete(`${apiUrl}/api/v1/gears/${id}`)
      .then(response => {
        dispatch(deleteGearSuccess(id));
      })
      .then(() => {
        history.push("/");
        refreshPage();
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const UPDATE_GEAR_SUCCESS = "UPDATE_GEAR_SUCCESS";

const updateGearSuccess = gear => ({
  type: UPDATE_GEAR_SUCCESS,
  gear
});

export const updateGear = gear => {
  const { id, title, content, amazonUrl, imgUrl } = gear;
  return dispatch => {
    return axios
      .patch(`${apiUrl}/api/v1/gears/${id}`, {
        title,
        content,
        amazonUrl,
        imgUrl
      })
      .then(response => {
        const data = response.data;
        dispatch(updateGearSuccess(data));
      })
      .then(() => {
        history.push(`/gears/${gear.id}`);
        refreshPage();
      });
  };
};
