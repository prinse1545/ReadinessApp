

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const setUser = user => {
  return (dispatch) => {
    dispatch(logIn(user))
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

const logIn = user => ({
  type: LOG_IN,
  user
})
