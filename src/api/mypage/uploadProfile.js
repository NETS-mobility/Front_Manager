import {GetToken} from '../../utils/controlToken';
const UploadProfile = async (img, imgName) => {
  console.log('Im in uploadProfile');
  const datas = new FormData();
  datas.append('file', {
    filename: imgName,
    originalname: imgName,
    name: imgName,
    type: 'multipart/form-data',
    uri: img,
  });
  datas.append('json', JSON.stringify({jwtToken: await GetToken()}));

  try {
    await fetch(
      'http://35.197.107.190:5000/manager/mypage/changeInfo/UploadProfile',
      {
        method: 'POST',
        body: datas,
      },
    )
      .then((res) => res)
      .catch((err) => err);
  } catch (err) {
    return err;
  }
};
export default UploadProfile;
