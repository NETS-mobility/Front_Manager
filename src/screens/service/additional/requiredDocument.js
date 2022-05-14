import React, {useState} from 'react';
import CommonLayout from '../../../components/common/layout';
import {StyleSheet, View, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CustomBtn from '../../../components/common/button';
import {btnStyles} from '../../../components/common/button';
import UploadDocument from '../../../components/service/detail/uploadDoc';
import ImageSubmitAPI from '../../../api/imageSubmit';

const RequiredDocument = ({navigation, route}) => {
  const [img, setImg] = useState('');
  const [imgName, setImgName] = useState('');
  const {detailId} = route.params;

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
    },
    submitImgBtn: {width: 122, height: 30, alignSelf: 'center'},
    submitBtn: {width: 245, height: 47, alignSelf: 'center'},
    contents: {
      paddingHorizontal: 30,
      paddingBottom: 66,
      height: '80%',
      justifyContent: 'space-between',
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
        <View>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fw900,
              typoStyles.textExplain,
              styles.text,
            ]}>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fw900,
                typoStyles.textPrimary,
              ]}>
              {'필수 서류 제출이 완료되지 않은 고객'}
            </Text>
            {`입니다.\n고객이 지참한 서류를 촬영하여 첨부해주세요.`}
          </Text>
          <View style={styles.submitImgSection}>
            <UploadDocument
              setImg={setImg}
              imgName={imgName}
              setImgName={setImgName}
            />
          </View>
        </View>

        <View>
          <CustomBtn
            viewStyle={[btnStyles.btnBlue, styles.submitBtn]}
            textStyle={[
              typoStyles.textWhite,
              typoStyles.fs20,
              typoStyles.fw900,
            ]}
            viewStyleDisabled={[btnStyles.btnDisable, styles.submitBtn]}
            text={'제출 완료'}
//             onPress={async () => {
//               const res = await ImageSubmitAPI(detailId, img, imgName);
//               if (res.status == 200) {
//                 console.log('나는 200이다.');
//                 // navigation.navigate('ServiceDetail', {detailId});
//                 // navigation.navigate(`ServiceDetail`, {detailId})
//               }
//               console.log('나는 pop하고싶어');
//               console.log('detailID?', detailId);
//               // navigation.replace('ServiceDetail', {detailId: detailId}); //되긴하는데, detail에서 뒤로가면 앱꺼짐
//               navigation.navigate(`ServiceDetail`, {detailId: detailId});
            onPress={() => {
              ImageSubmitAPI(detailId, img, imgName);
              // navigation.navigate('ServiceDetail');
            }}
          />
        </View>
      </View>
    </CommonLayout>
  );
};

export default RequiredDocument;
