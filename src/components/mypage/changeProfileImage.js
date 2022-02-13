import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import CustomBtn from '../common/button';
import {btnStyles} from '../common/button';
import {launchImageLibrary} from 'react-native-image-picker';

const ChangeProfileImage = ({img, setImg}) => {
  const [ext, setExt] = useState('');

  const getExtension = () => {
    const splitImgName = img.split('.');
    setExt(`.${splitImgName[1]}`);
  };

  const selectImg = () => {
    launchImageLibrary({mediaType: 'photo'}, (res) => {
      console.log(res.assets[0].fileName);
      setImg(res.assets[0].fileName);
    });
  };

  useEffect(() => {
    getExtension();
  }, [img]);

  const styles = StyleSheet.create({
    submitImgBtn: {
      width: 95,
      height: 95,
      borderRadius: 50,
      alignSelf: 'center',
    },
    imgName: {width: '60%', textAlign: 'left'},
  });

  return (
    <>
      <CustomBtn
        viewStyle={[btnStyles.btnDisable, styles.submitImgBtn]}
        textStyle={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fw900]}
        viewStyleDisabled={[btnStyles.btnDisable, styles.submitImgBtn]}
        onPress={selectImg}
      />
      {img == '' ? (
        <></>
      ) : (
        <Text style={styles.imgName}>
          선택된 파일: {img.substring(25, 35) + '... ' + ext}
        </Text>
      )}
    </>
  );
};

export default ChangeProfileImage;
