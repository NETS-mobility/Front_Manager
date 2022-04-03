import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
const Alarm_test = async () => {
  try {
    const res = await axios.post('/alarm_test/manager', {
      text: '알림테스트',
      device_token: await AsyncStorage.getItem('deviceToken'),
    });
    console.log('알림 성공?', res.status);
    return res.status;
  } catch (err) {
    return err;
  }
};
export default Alarm_test;
