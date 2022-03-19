import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetTodayReserveList = async () => {
  try {
    const res = await axios.post('/manager', {jwtToken: await GetToken()});
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetTodayReserveList;
