import {
  SET_HOURS_OF_SLEEP,
  SET_SLEEP_QUALITY,
  SET_SLEEP_CONSECUTIVE,
  SET_FATIGUE_LEVEL,
  SET_SORENESS,
  SET_MENTAL_STRESS,
  SET_GAME_DAY,
  CLEAR
} from '../actions/day';

const initialState = {
  hoursOfSleep: null,
  sleepQuality: 1,
  consecutiveSleep: false,
  fatigueLevel: 1,
  soreness: [],
  mentalStressLevel: 1,
  gameDay: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOURS_OF_SLEEP:
      return {...state, hoursOfSleep: action.hours}
    case SET_SLEEP_QUALITY:
      return {...state, sleepQuality: action.quality}
    case SET_SLEEP_CONSECUTIVE:
      return {...state, consecutiveSleep: action.consecutive}
    case SET_FATIGUE_LEVEL:
      return {...state, fatigueLevel: action.fatigue}
    case SET_SORENESS:
      return {...state, soreness: action.soreness}
    case SET_MENTAL_STRESS:
      return {...state, mentalStressLevel: action.stress}
    case SET_GAME_DAY:
      return {...state, gameDay: action.gameDay}
    case CLEAR:
      return initialState;
    default:
      return state;

  }
}
