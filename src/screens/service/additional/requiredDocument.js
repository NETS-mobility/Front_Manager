import React, {useState} from 'react';
import CommonLayout from '../../../components/common/layout';
import {StyleSheet, View, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CustomBtn from '../../../assets/fonts/button';
import {btnStyles} from '../../../assets/fonts/button';
import ImageSubmit from '../../../components/common/imageSubmit';

const RequiredDocument = () => {
  const [img, setImg] = useState('');
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {marginBottom: 55},
    text: {
      marginBottom: 55,
    },
    submitImgSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 255,
    },
    submitImgBtn: {width: 122, height: 30, alignSelf: 'center'},
    submitBtn: {width: 245, height: 47, alignSelf: 'center'},
    contents: {
      paddingHorizontal: 30,
      paddingBottom: 66,
    },
  });

  return (
    <CommonLayout>
      <View style={styles.block1}>
        <Text
          style={[
            typoStyles.fs32,
            typoStyles.textMain,
            typoStyles.fw900,
            styles.title,
          ]}>
          필수 서류 제출
        </Text>
      </View>
      <View style={styles.contents}>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw900,
            typoStyles.textExplain,
            styles.text,
          ]}>
          <Text
            style={[typoStyles.fs14, typoStyles.fw900, typoStyles.textPrimary]}>
            {'필수 서류 제출이 완료되지 않은 고객'}
          </Text>
          {`입니다.\n고객이 지참한 서류를 촬영하여 첨부해주세요.`}
        </Text>

        <View style={styles.submitImgSection}>
          <ImageSubmit img={img} setImg={setImg} />
        </View>

        <CustomBtn
          viewStyle={[btnStyles.btnBlue, styles.submitBtn]}
          textStyle={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw900]}
          viewStyleDisabled={[btnStyles.btnDisable, styles.submitBtn]}
          text={'제출 완료'}
        />
      </View>
    </CommonLayout>
  );
};

export default RequiredDocument;
