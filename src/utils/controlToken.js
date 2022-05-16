import AsyncStorage from '@react-native-community/async-storage';
export const SetToken = (token) => {
  AsyncStorage.setItem('jwtToken', token, () => {
    console.log('token은 ' + token + '입니다');
  });
};

export const GetToken = () => {
  return new Promise((resolve, reject) => {
    const res = AsyncStorage.getItem('jwtToken', (err, result) => {
      return result;
    });
    resolve(res);
  });
};

export const DeleteToken = async () => {
  await AsyncStorage.removeItem('jwtToken');
  console.log('delete!');
};

export const SetDeviceToken = async (token) => {
  await AsyncStorage.setItem('deviceToken', token, () => {
    console.log('deviceToken은 ' + token + '입니다');
  });
};

export const GetDeviceToken = () => {
  return new Promise((resolve, reject) => {
    const res = AsyncStorage.getItem('deviceToken', (err, result) => {
      return result;
    });
    resolve(res);
  });
};
