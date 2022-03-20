import axios from 'axios';

const CheckPhoneAPI = async (data, res, setRes) => {
  await axios
    .post('/manager/login/checkPhone', {phone: data})
    .then((res) => {
      setRes({
        ...res,
        receiveCheckPhoneNum: res.data.randomNumber.randomNumber,
      });
      console.log(res);
    })
    .catch((err) => console.log(JSON.stringify(err)));
};

export default CheckPhoneAPI;
