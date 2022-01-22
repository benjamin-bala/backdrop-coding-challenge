import AsyncStorage from '@react-native-async-storage/async-storage';
import filterArray from './filterArray';

export const storeData = async data => {
  try {
    let oldData = await retriveData();
    let newData = data;
    let _store = filterArray(oldData, newData);
    AsyncStorage.setItem('favourite', JSON.stringify(_store));
  } catch (error) {
    return false;
  }
};

export const retriveData = async () => {
  try {
    let result = await AsyncStorage.getItem('favourite');

    if (result) {
      return JSON.parse(result);
    }
    return [];
  } catch (e) {
    return [];
  }
};
