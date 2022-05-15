import axios from 'axios';

const RecodeTimeAPI = async (data) => {
  try {
    const res = await axios.post(
      `/manager/service/serviceDetail/${data.service_id}/recodeTime`,
      data,
    );
    return res;
  } catch (err) {
    return err;
  }
};

export default RecodeTimeAPI;
