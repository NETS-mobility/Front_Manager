import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetServiceList = async (type, date) => {
  console.log(type, date);
  try {
    const res = await axios.post(
      `/manager/service/serviceList/${type}/${date}`,
      {
        jwtToken: await GetToken(),
        listType: type,
        date: date,
      },
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetServiceList;
