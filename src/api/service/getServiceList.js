import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetServiceList = async (type) => {
  try {
    const res = await axios.post(`/manager/service/serviceList/${type}`, {
      jwtToken: await GetToken(),
      listType: type,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetServiceList;
