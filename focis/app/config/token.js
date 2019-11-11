import AsyncStorage from '@react-native-community/async-storage';

const AUTH_TOKEN = 'auth-token';

export const getToken = () => AsyncStorage.getItem(AUTH_TOKEN);
export const setToken = token => AsyncStorage.setItem(AUTH_TOKEN, token);
export const deleteToken = () => AsyncStorage.removeItem(AUTH_TOKEN);
