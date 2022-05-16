import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import CustomBtn, {btnStyles} from '../../../components/common/button';
import {
  ChangeInput,
  ChangeInputWithBtn,
  ChangeBigInput,
} from '../../../components/mypage/changeInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ChangeProfileImage from '../../../components/mypage/changeProfileImage';
import GetManagerInfo from '../../../api/mypage/getManagerInfo';
import ChangeManagerInfo from '../../../api/mypage/ChangeManagerInfo';
import CheckEmailDupAPI from '../../../api/mypage/checkEmailDup';
import {EmailValidation} from '../../../utils/validation';
import CheckPhoneAPI from '../../../api/mypage/checkPhone';
import UploadProfile from '../../../api/mypage/uploadProfile';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    marginLeft: 30,
    marginBottom: 30,
  },
  setcenter: {
    alignItems: 'center',
  },
  savebtn: {
    width: 300,
    height: 47,
  },
  wrapbtn: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

const ChangeInfo = ({navigation}) => {
  const [managerInfo, setManagerInfo] = useState({
    introduce: '',
    notice: '',
    noticeImg: '1',
    name: '',
    email: '',
    phone: '',
    checkPhoneNum: '',
    receiveCheckPhoneNum: '',
    certificate: [],
  });

  //중복확인
  const [checkErr, setCheckErr] = useState({
    checkPhone: false, //false -> 인증번호 진행 x
    checkPhoneSuccess: false, //false -> 인증번호 틀림
    checkEmail: false, //false -> 중복확인 진행 x
    checkEmailSuccess: false, //false -> 이메일 중복 true -> 이메일 사용가능(중복아님)
    errMsg: '', //에러메시지
  });

  const [img, setImg] = useState('');
  const [dis, setDis] = useState(true);
  const [imgName, setImgName] = useState('');

  const GetManagerInfos = async () => {
    const res = await GetManagerInfo();
    setManagerInfo({
      ...managerInfo,
      introduce: res.info.intro,
      notice: res.info.notice,
      name: res.info.name,
      email: res.info.id,
      phone: res.info.phone,
      certificate: res.certificate,
    });
    setImg(res.url_profile);
  };

  useEffect(() => {
    GetManagerInfos();
  }, []);

  useEffect(() => {
    const managerInfoKey = Object.keys(managerInfo);
    console.log('receive==', managerInfo.receiveCheckPhoneNum);
    if (!EmailValidation(managerInfo.email)) {
      setCheckErr({...checkErr, errMsg: '이메일 형식이 맞지 않습니다.'});
      setDis(true);
    } else if (!checkErr.checkEmail) {
      setCheckErr({...checkErr, errMsg: '이메일 중복확인을 진행해주세요.'});
      setDis(true);
    } else if (!checkErr.checkEmailSuccess) {
      setCheckErr({...checkErr, errMsg: '중복된 이메일입니다.'});
      setDis(true);
    } else if (!PhoneValidation(managerInfo.phone)) {
      setCheckErr({
        ...checkErr,
        errMsg: '휴대전화 번호 형식이 맞지 않습니다.',
      });
      setDis(true);
    } else if (!checkErr.checkPhone) {
      setCheckErr({...checkErr, errMsg: '휴대전화 인증을 진행해주세요.'});
      setDis(true);
    } else if (managerInfo.checkPhoneNum != managerInfo.receiveCheckPhoneNum) {
      setCheckErr({...checkErr, errMsg: '인증 번호가 일치하지 않습니다.'});
      setDis(true);
    } else if (managerInfo.checkPhoneNum == managerInfo.receiveCheckPhoneNum) {
      setCheckErr({...checkErr, checkPhoneSuccess: true});
      setDis(false);
    } else {
      setCheckErr({...checkErr, errMsg: ''});
      setDis(false);
    }
    for (let i = 0; i < managerInfoKey.length; i++) {
      if (managerInfo[managerInfoKey[i]] == '') {
        if (
          managerInfoKey[i] == 'noticeImg' ||
          managerInfoKey[i] == 'certificate' ||
          managerInfoKey[i] == 'receiveCheckPhoneNum'
        )
          continue;
        setCheckErr({...checkErr, errMsg: '빈칸을 모두 채워주세요.'});
        setDis(true);
        break;
      } else {
        setCheckErr({...checkErr, errMsg: ''});
        setDis(false);
      }
    }
  }, [managerInfo]);

  return (
    <CommonLayout>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.background}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={false}>
        <ScrollView>
          <View style={styles.title}>
            <Text
              style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
              마이페이지
            </Text>
          </View>
          <View>
            <View style={styles.setcenter}>
              <ChangeProfileImage
                img={img}
                setImg={setImg}
                setImgName={setImgName}
              />
              <ChangeBigInput
                title={'자기소개'}
                text={managerInfo.introduce}
                setText={setManagerInfo}
                propName={'introduce'}
                image={false}
              />
              <ChangeBigInput
                title={'전달사항'}
                text={managerInfo.notice}
                setText={setManagerInfo}
                image={true}
                propName={'notice'}
              />
              <ChangeInput
                title={'이름'}
                place1={'이름'}
                text={managerInfo.name}
                setText={setManagerInfo}
                propName={'name'}
              />
              <ChangeInputWithBtn
                title={'이메일'}
                place1={'이메일'}
                text={managerInfo.email}
                setText={setManagerInfo}
                btntext={'중복확인'}
                propName={'email'}
                onPress={() => {
                  CheckEmailDupAPI(managerInfo.email, checkErr, setCheckErr);
                  setCheckErr({...checkErr, checkEmail: true});
                }}
              />
              <ChangeInputWithBtn
                title={'휴대전화'}
                place1={'휴대전화'}
                text={managerInfo.phone}
                setText={setManagerInfo}
                btntext={'인증번호전송'}
                propName={'phone'}
                onPress={() => {
                  CheckPhoneAPI(managerInfo.phone, managerInfo, setManagerInfo);
                  //========================================================= false로 바꿔야 함. true는 테스트용 ===========================================================
                  // setCheckErr({...checkErr, checkPhone: false});
                  //========================================================= false로 바꿔야 함. true는 테스트용 ===========================================================
                  setCheckErr({...checkErr, checkPhone: true});
                }}
              />
              <ChangeInput
                title={'인증번호'}
                place1={'인증번호'}
                text={managerInfo.checkPhoneNum}
                setText={setManagerInfo}
                propName={'checkPhoneNum'}
              />
            </View>
          </View>
          <View style={styles.wrapbtn}>
            <Text
              style={[
                typoStyles.fs13,
                typoStyles.fwRegular,
                typoStyles.textPrimary,
              ]}>
              {checkErr.errMsg}
            </Text>
            <CustomBtn
              viewStyle={[btnStyles.btnBlue, styles.savebtn]}
              textStyle={[
                typoStyles.fs20,
                typoStyles.fwBold,
                typoStyles.textWhite,
              ]}
              viewStyleDisabled={[btnStyles.btnDisable, styles.savebtn]}
              textStyleDisabled={[
                typoStyles.fs20,
                typoStyles.fwBold,
                typoStyles.textWhite,
              ]}
              text={'변경 정보 저장'}
              disabled={dis}
              onPress={async () => {
                await ChangeManagerInfo(managerInfo);
                await UploadProfile(img, imgName);
                navigation.pop();
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </CommonLayout>
  );
};

export default ChangeInfo;
