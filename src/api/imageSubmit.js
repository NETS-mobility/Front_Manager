const ImageSubmitAPI = async (service_id, img, imgName) => {
  const datas = new FormData();
  datas.append('file', {
    filename: imgName,
    originalname: imgName,
    name: imgName,
    type: 'multipart/form-data',
    uri: img,
  });
  // datas.append('json', JSON.stringify({jwtToken: await GetToken()}));

  try {
    await fetch(
      `http://35.197.107.190:5000/manager/service/serviceDetail/${service_id}/submitDoc`,
      {
        method: 'POST',
        body: datas,
      },
    )
      .then((res) => res)
      .catch((err) => err);
    return res;
  } catch (err) {
    return err;
  }
};

export default ImageSubmitAPI;
