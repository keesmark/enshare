import axios from "axios";

const apiUrl = "http://localhost:3000";

export const createGear = gear => {
  return (dispatch, getState) => {
    axios
      .post(`${apiUrl}/gears`, { gear })
      .then(response => {
        dispatch({ type: "CREATE_GEAR", gear });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
