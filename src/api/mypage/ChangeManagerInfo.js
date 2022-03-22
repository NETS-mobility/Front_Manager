import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const ChangeManagerInfo = async (data) => {
  try {
    const res = await axios.post('/manager/mypage/changeInfo/changeInfo', {
      jwtToken: await GetToken(),
      name: data.name,
      phone: data.phone,
      intro: data.introduce,
      notice: data.notice,
    });
    console.log('res in changeinfo api========', res);
    return res;
  } catch (err) {
    return err;
  }
};
export default ChangeManagerInfo;
