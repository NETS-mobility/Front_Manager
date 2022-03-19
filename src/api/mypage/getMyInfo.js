import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetMyInfo = async () => {
  try {
    const res = await axios.post('/manager/mypage', {
      jwtToken: await GetToken(),
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetMyInfo;
