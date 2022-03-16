import axios from 'axios';
const ImageSubmitAPI = async (service_id, img) => {
  try {
    const res = await axios.post(
      `/manager/service/serviceDetail/22022611018/submitDoc`,
      {service_id: '22022611018', file: img},
    );
    return res;
  } catch (err) {
    return err;
  }
};

export default ImageSubmitAPI;
