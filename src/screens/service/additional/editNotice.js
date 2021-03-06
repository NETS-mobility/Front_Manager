import React, {useEffect, useState} from 'react';
import CommonLayout from '../../../components/common/layout';
import {StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CustomBtn from '../../../components/common/button';
import {btnStyles} from '../../../components/common/button';
import UploadDocument from '../../../components/service/detail/uploadDoc';
import SetManagerNotice from '../../../api/service/setManagerNotice';
import SetNoticeFile from '../../../api/service/setNoticeFile';

const EditNotice = ({navigation, route}) => {
  const [img, setImg] = useState('');
  const [imgName, setImgName] = useState('');
  const [contents, setContents] = useState('');
  const {detailId} = route.params;

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
        <TextInput
          style={[styles.multiInput]}
          multiline={true}
          value={contents}
          onChangeText={setContents}
        />
        <View style={styles.submitImgSection}>
          <UploadDocument
            setImg={setImg}
            imgName={imgName}
            setImgName={setImgName}
          />
        </View>
        <CustomBtn
          viewStyle={[btnStyles.btnBlue, styles.submitBtn]}
          textStyle={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw900]}
          viewStyleDisabled={[btnStyles.btnDisable, styles.submitBtn]}
          onPress={async () => {
            const res = await SetManagerNotice(detailId, contents);
            await SetNoticeFile(img, imgName);
            if (res.status === 200) {
              navigation.pop();
            } else {
              Alert.alert(
                '전달사항 전송에 실패하였습니다.',
                '다시 시도해주세요.',
                [{text: '확인', style: 'cancel'}],
              );
            }
          }}
          text={'전달 사항 전송'}
        />
      </View>
    </CommonLayout>
  );
};

export default EditNotice;
