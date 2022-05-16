const SetNoticeFile = async (id, img, imgName) => {
  const datas = new FormData();
  datas.append('file', {
    filename: imgName,
    originalname: imgName,
    name: imgName,
    type: 'multipart/form-data',
    uri: img,
  });

  console.log('log in noticefile=', datas);
  try {
    await fetch(
      `http://35.197.107.190:5000/manager/service/serviceDetail/${id}/managerNotice/file`,
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

export default SetNoticeFile;
