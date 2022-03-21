import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const CheckEmailDupAPI = async (email, success, setSuccess) => {
  await axios
    .post('/manager/mypage/changeInfo/checkDup', {
      jwtToken: await GetToken(),
      user_newId: email,
    })
    .then((res) => {
      if (res.data.isDup == false)
        setSuccess({...success, checkEmailSuccess: true});
      else setSuccess({...success, checkEmailSuccess: false});
    })
    .catch((err) => setSuccess({...success, checkEmailSuccess: false}));
};

export default CheckEmailDupAPI;
