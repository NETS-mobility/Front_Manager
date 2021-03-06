import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const ViewAlarm = async () => {
  try {
    const res = await axios.post('/manager/view_alarm/alarmList', {
      jwtToken: await GetToken(),
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
export default ViewAlarm;
