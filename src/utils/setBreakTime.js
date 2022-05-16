import AsyncStorage from '@react-native-community/async-storage';
export const SetBreak = (time) => {
  AsyncStorage.setItem('breakTime', time, () => {
    console.log('breakTime은 ' + time + '으로 저장되었습니다.');
  });
};

export const GetBreak = () => {
  return new Promise((resolve, reject) => {
    const res = AsyncStorage.getItem('breakTime', (err, result) => {
      return result;
    });
    resolve(res);
  });
};

export const DeleteBreak = async () => {
  await AsyncStorage.removeItem('breakTime');
  console.log('delete breakTime!');
};
