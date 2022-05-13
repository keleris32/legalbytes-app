import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserDataFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
  }
};
