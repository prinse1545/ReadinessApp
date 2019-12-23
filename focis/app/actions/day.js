
export const SET_HOURS_OF_SLEEP = "SET_HOURS_OF_SLEEP";
export const SET_SLEEP_QUALITY = "SET_SLEEP_QUALITY";
export const SET_SLEEP_CONSECUTIVE = "SET_SLEEP_CONSECUTIVE";
export const SET_FATIGUE_LEVEL = "SET_FATIGUE_LEVEL";
export const SET_SORENESS = "SET_SORENESS";
export const SET_MENTAL_STRESS = "SET_MENTAL_STRESS";
export const SET_GAME_DAY = "SET_GAME_DAY";
export const CLEAR = "CLEAR";



export const setHoursOfSleep = hours => ({
  type: SET_HOURS_OF_SLEEP,
  hours
})

export const setSleepQuality = quality => ({
  type: SET_SLEEP_QUALITY,
  quality
})

export const setSleepConsecutive = consecutive => ({
  type: SET_SLEEP_CONSECUTIVE,
  consecutive
})

export const setFatigueLevel = fatigue => ({
  type: SET_FATIGUE_LEVEL,
  fatigue
})

export const setSoreness = soreness => ({
  type: SET_SORENESS,
  soreness
})

export const setMentalStress = stress => ({
  type: SET_MENTAL_STRESS,
  stress
})

export const setGameDay = gameDay => ({
  type: SET_GAME_DAY,
  gameDay
})

export const clear = () => ({
  type: CLEAR
})
