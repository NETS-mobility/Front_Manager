import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetManagerInfo = async () => {
  try {
    const res = await axios.post('/manager/mypage/changeInfo', {
      jwtToken: await GetToken(),
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetManagerInfo;
