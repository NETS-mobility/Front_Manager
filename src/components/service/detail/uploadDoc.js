import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CustomBtn, {btnStyles} from '../../common/button';
import {GetExtension, SelectImg} from '../../common/imageSubmit';

const UploadDocument = ({setImg, imgName, setImgName}) => {
  const [ext, setExt] = useState('');
  useEffect(() => {
    GetExtension(imgName, setExt);
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
        onPress={() => SelectImg(setImg, setImgName)}
      />
      {imgName === '' || imgName === undefined ? (
        <></>
      ) : (
        <Text style={styles.imgName}>
          선택된 파일: {imgName?.substring(25, 35) + '... ' + ext}
        </Text>
      )}
    </>
  );
};

export default UploadDocument;
