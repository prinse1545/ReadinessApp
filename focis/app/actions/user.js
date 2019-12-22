

export const SET_USER_ID = "SET_USER_ID";
export const LOG_OUT = "LOG_OUT";

export const setUserId = userId => {
  return (dispatch) => {
    dispatch(setId(userId))
  }
}
export const clearUser = () => {
  return (dispatch) => {
    dispatch(logOut())
  }
}

const logOut = () => ({
  type: LOG_OUT
})

const setId = id => ({
  type: SET_USER_ID,
  id
})
