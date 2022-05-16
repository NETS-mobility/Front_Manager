import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetServiceDetail = async (id) => {
  try {
    const res = await axios.post(`/manager/service/serviceDetail/${id}`, {
      jwtToken: await GetToken(),
      service_id: id,
    });
    console.log('res=?', res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetServiceDetail;
