import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import CustomBtn from './button';
import {btnStyles} from './button';
import {launchImageLibrary} from 'react-native-image-picker';

const ImageSubmit = ({img, setImg}) => {
  const [ext, setExt] = useState('');
  const [imgName, setImgName] = useState('');

  const getExtension = () => {
    const splitImgName = imgName.split('.');
    setExt(`.${splitImgName[1]}`);
  };

  const selectImg = () => {
    launchImageLibrary({mediaType: 'photo'}, (res) => {
      setImg(res.assets[0].uri);
      setImgName(res.assets[0].fileName);
    });
  };

  useEffect(() => {
    getExtension();
    const datas = new FormData();
    datas.append('images', {
      name: img.fileName,
      type: 'multipart/form-data',
      uri: img.uri,
    });
    setImg(datas);
  }, [imgName]);

  const styles = StyleSheet.create({
    submitImgBtn: {width: 122, height: 30, alignSelf: 'center'},
    imgName: {width: '60%', textAlign: 'left'},
  });

  return (
    <>
      <CustomBtn
        viewStyle={[btnStyles.btnBlue, styles.submitImgBtn]}
        textStyle={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fw900]}
        viewStyleDisabled={[btnStyles.btnDisable, styles.submitImgBtn]}
        text={'이미지 선택'}
        onPress={selectImg}
      />
      {imgName === '' ? (
        <></>
      ) : (
        <Text style={styles.imgName}>
          선택된 파일: {imgName.substring(25, 35) + '... ' + ext}
        </Text>
      )}
    </>
  );
};

export default ImageSubmit;
