import {launchImageLibrary} from 'react-native-image-picker';

export const SelectImg = (setImg, setImgName) => {
  launchImageLibrary({mediaType: 'photo'}, (res) => {
    if (res.didCancel) {
      return;
    }
    setImg(res.assets[0].uri);
    setImgName(res.assets[0].fileName);
  });
};

export const GetExtension = (imgName, setExt) => {
  const splitImgName = imgName?.split('.');
  setExt(`.${splitImgName[1]}`);
};
