import axios from 'axios';

const CheckPhoneAPI = async (data, res, setRes) => {
  await axios
    .post('/manager/login/checkPhone', {phone: data})
    .then((response) => {
      // setRes({
      //   ...res,
      //   receiveCheckPhoneNum: res.data.randomNumber.randomNumber,
      // });
      setRes({...res, receiveCheckPhoneNum: '3'});
      console.log(response);
    })
    .catch((err) => console.log(JSON.stringify(err)));
};

export default CheckPhoneAPI;
