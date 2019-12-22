import {
  SET_USER_ID,
  LOG_OUT
} from '../actions/user.js'

const initialState = {
  id: null,
  email: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_ID:
      return {...state, id: action.id}
    case LOG_OUT:
      return {...state, id: null, email: null}
    default:
      return state
  }
}
