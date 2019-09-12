import axios from "axios";

const apiUrl = "http://localhost:3000";

export const createGear = gear => {
  return (dispatch, getState) => {
    axios
      .post(`${apiUrl}/api/v1/gears`, { gear })
      .then(response => {
        dispatch({ type: "CREATE_GEAR", gear });
        console.log(response);
        console.log("returned");
      })
      .catch(error => {
        console.log(error);
        console.log("aho");
      });
  };
};
