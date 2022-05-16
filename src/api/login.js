import axios from 'axios';
import {SetToken, GetDeviceToken} from '../utils/controlToken';

const LoginAPI = async (id, pass) => {
  console.log('deviceToken==', await GetDeviceToken());
  try {
    const res = await axios.post('/manager/login', {
      id: id,
      password: pass,
      device_token: await GetDeviceToken(),
    });
    SetToken(res.data.token);
    console.log('login api res=', res);
    return res.data;
  } catch (err) {
    console.log('login err=', err);
    return err;
  }
  console.log('login end=');
};

export default LoginAPI;
