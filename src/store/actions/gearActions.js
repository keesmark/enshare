export const createGear = gear => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_GEAR", gear });
  };
};
