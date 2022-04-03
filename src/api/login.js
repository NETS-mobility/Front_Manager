import axios from 'axios';
import {SetToken} from '../utils/controlToken';

const LoginAPI = async (data) => {
  console.log('data!!', data);
  try {
    const res = await axios.post('/manager/login', data);
    SetToken(res.data.token);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default LoginAPI;
