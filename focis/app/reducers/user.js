import {
  LOG_IN,
  LOG_OUT
} from '../actions/user.js'

const initialState = {
  id: null,
  email: null
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {...state, id: action.user.id, email: action.user.emai}
    case LOG_OUT:
      return {...state, id: null, email: null}
  }
}
