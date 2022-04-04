import axios from 'axios';
import {SetToken} from '../utils/controlToken';
import AsyncStorage from '@react-native-community/async-storage';

const LoginAPI = async (id, pass) => {
  console.log('this is login api');
  try {
    const res = await axios.post('/manager/login', {
      id: id,
      password: pass,
      deviceToken: await AsyncStorage.getItem('deviceToken'),
    });
    SetToken(res.data.token);
    console.log('login res=', res.data);
    return res.data;
  } catch (err) {
    console.log('login err=', err);
    return err;
  }
  console.log('login end=');
};

export default LoginAPI;
