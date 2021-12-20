import AsyncStorage from '@react-native-async-storage/async-storage';


const FIRST_LAUNCH_KEY = '$_FIRST_LAUNCH';
const FIRST_LOGIN_KEY = '$_FIRST_LOGIN';

export const setFirstLaunch = async () => AsyncStorage.setItem(FIRST_LAUNCH_KEY, 'true');

export const checkFirstLaunch = async () => {
  const result = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);
  return Boolean(result);
};

export const clearFirstLaunch = () => AsyncStorage.removeItem(FIRST_LAUNCH_KEY);

export const setFirstLogin = async () => AsyncStorage.setItem(FIRST_LOGIN_KEY, 'true');

export const checkFirstLogin = async () => {
  const result = await AsyncStorage.getItem(FIRST_LOGIN_KEY);
  return Boolean(result);
};

export const clearFirstLogin = () => AsyncStorage.removeItem(FIRST_LOGIN_KEY);

export const clearAll = () => Promise.all([clearFirstLaunch(), clearFirstLogin()]);