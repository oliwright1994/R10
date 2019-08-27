import AsyncStorage from '@react-native-community/async-storage';

export const createFave = async faveId => {
  try {
    return AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, faved_on: new Date()}),
    );
  } catch (error) {
    return error;
  }
};

export const deleteFave = async faveId => {
  try {
    return await AsyncStorage.removeItem(`${faveId}`);
  } catch (error) {
    throw error;
  }
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (error) {
    return error;
  }
};
