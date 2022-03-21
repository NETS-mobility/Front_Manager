import axios from 'axios';

const RecodeTimeAPI = async (data) => {
  try {
    console.log('recodeTimeAPI request data', data);
    const res = await axios.post(
      //   `/manager/service/serviceDetail/${data.service_id}/${data.recodeTime}`,
      `/manager/service/serviceDetail/${data.service_id}/recodeTime`,
      data,
    );
    console.log('recodeTime status', res.status);
    console.log('recodeTime res==>', res);
    return res;
  } catch (err) {
    return err;
  }
};

export default RecodeTimeAPI;
