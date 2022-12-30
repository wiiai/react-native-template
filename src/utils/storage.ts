import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  setItem: async (key: string, val: any) => {
    if (typeof val === 'object') {
      val = JSON.stringify(val);
    }
    try {
      await AsyncStorage.setItem(key, val);
    } catch (error) {
      console.log('error saving data', val);
    }
  },

  getItem: async (key: string) => {
    try {
      let val = await AsyncStorage.getItem(key);
      if (val !== null) {
        try {
          val = JSON.parse(val);
        } catch (e) {}
        return val;
      }
    } catch (err) {
      return null;
    }
  },

  removeItem: async (key: string) => {
    return await AsyncStorage.removeItem(key);
  },
};