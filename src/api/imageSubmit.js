// /manager/service/serviceDetail/[service_id]/submitDoc
import axios from 'axios';
const ImageSubmitAPI = async (service_id, img) => {
  try {
    const res = await axios.post(
      `/manager/service/serviceDetail/22022611018/submitDoc`,
      {headers: {'Content-Type': 'multipart/form-data'}},
      {service_id: '22022611018', file: img},
    );
    console.log('img==', img);
    console.log('res-=', res);
    return res;
  } catch (err) {
    console.log('img==', JSON.stringify(img));
    console.log('err==', err);
    return err;
  }
};

export default ImageSubmitAPI;
