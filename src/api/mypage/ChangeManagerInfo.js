import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const ChangeManagerInfo = async (data) => {
  console.log("I'm changeinfo data = ", data);
  try {
    const res = await axios.post('/manager/mypage/changeInfo/changeInfo', {
      jwtToken: await GetToken(),
      id: data.email,
      name: data.name,
      phone: data.phone,
      intro: data.introduce,
      notice: data.notice,
    });
    console.log('res in changeinfo api========', res);
    return res;
  } catch (err) {
    console.log('err in changemanagerinfo = ', err.response);
    return err;
  }
};
export default ChangeManagerInfo;
