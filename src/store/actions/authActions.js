import axios from "axios";
import history from "../../history";

const apiUrl = "http://localhost:3000";

function refreshPage() {
  window.location.reload(false);
}

export const createUser = user => dispatch => {
  axios
    .post(`${apiUrl}/api/v1/users`, { user })
    .then(response => {
      dispatch({ type: "CREATE_USER", user });
    })
    .then(() => {
      history.push("/");
      refreshPage();
    })
    .catch(error => {
      console.log(error);
    });
};
