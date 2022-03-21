import axios from 'axios';
const ImageSubmitAPI = async (service_id, img) => {
  try {
    const res = await axios.post(
      `/manager/service/serviceDetail/${service_id}/submitDoc`,
      {service_id: service_id, file: img},
    );
    return res;
  } catch (err) {
    return err;
  }
};

export default ImageSubmitAPI;
