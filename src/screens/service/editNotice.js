import React, {useState} from 'react';
import CommonLayout from '../../components/common/layout';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import CustomBtn from '../../assets/fonts/button';
import {btnStyles} from '../../assets/fonts/button';
import ImageSubmit from '../../components/common/imageSubmit';

const EditNotice = () => {
  const [img, setImg] = useState('');
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
      marginBottom: 53,
    },
    title: {marginBottom: 5},
    text: {
      marginBottom: 55,
    },
    submitImgSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 50,
    },
    submitImgBtn: {width: 122, height: 30, alignSelf: 'center'},
    submitBtn: {width: 245, height: 47, alignSelf: 'center'},
    contents: {
      paddingHorizontal: 30,
      paddingBottom: 66,
    },
    multiInput: {
      width: '100%',
      height: 211,
      paddingHorizontal: 24,
      paddingVertical: 18,
      borderWidth: 2,
      borderColor: '#19b7cd',
      textAlignVertical: 'top',
      marginBottom: 17,
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
          전달 사항 수정
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.textExplain, typoStyles.fw900]}>
          고객님께 전달할 사항을 입력해주세요.
        </Text>
      </View>

      <View style={styles.contents}>
        <TextInput style={[styles.multiInput]} multiline={true} />
        <View style={styles.submitImgSection}>
          <ImageSubmit img={img} setImg={setImg} />
        </View>
        <CustomBtn
          viewStyle={[btnStyles.btnBlue, styles.submitBtn]}
          textStyle={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw900]}
          viewStyleDisabled={[btnStyles.btnDisable, styles.submitBtn]}
          text={'전달 사항 전송'}
        />
      </View>
    </CommonLayout>
  );
};

export default EditNotice;
