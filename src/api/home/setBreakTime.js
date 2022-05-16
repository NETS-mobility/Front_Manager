import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const SetBreakTime = async (time, state) => {
  try {
    const res = await axios.post('/manager/recodeBreaktime', {
      jwtToken: await GetToken(),
      break_time: time,
      break_state: state,
    });
    return res;
  } catch (err) {
    console.log('err in breaktime=', err.response);
    return err;
  }
};

export default SetBreakTime;
