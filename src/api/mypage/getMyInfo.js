import axios from 'axios';
const GetMyInfo = async (token) => {
  try {
    const res = await axios.post('/manager/mypage', {jwtToken: token});
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetMyInfo;
