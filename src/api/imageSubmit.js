const ImageSubmitAPI = async (service_id, img, imgName) => {
  const datas = new FormData();
  datas.append('file', {
    filename: imgName,
    originalname: imgName,
    name: imgName,
    type: 'multipart/form-data',
    uri: img,
  });
  const response = await fetch(
    `http://35.197.107.190:5000/manager/service/serviceDetail/${service_id}/submitDoc`,
    {
      method: 'POST',
      body: datas,
    },
  );
  let result = response;
  return result;
};

export default ImageSubmitAPI;
