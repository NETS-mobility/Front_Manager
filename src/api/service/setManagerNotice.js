import axios from 'axios';

const SetManagerNotice = async (id, content) => {
  try {
    const res = await axios.post(
      `/manager/service/serviceDetail/${id}/managerNotice`,
      {
        content: content,
      },
    );
    console.log('res in set notice=', res.data);
    return res;
  } catch (err) {
    console.log('err in set notice=', err.response);
    return err;
  }
};
export default SetManagerNotice;
