import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {btnStyles} from '../../../components/common/button';
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

const ChangeInfo = () => {
  const [managerInfo, setManagerInfo] = useState({
    profileImg: '',
    introduce: '',
    notice: '',
    noticeImg: '',
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

  const GetManagerInfos = async () => {
    const res = await GetManagerInfo();
    setManagerInfo(...managerInfo, {
      introduce: res.intro,
      notice: res.notice,
      name: res.name,
      phone: res.phone,
      certificate: res.certificate,
    });
  };

  useEffect(() => {
    GetManagerInfos();
  }, []);

  useEffect(() => {
    const managerInfoKey = Object.keys(managerInfo);
    console.log('managerInfo change==', managerInfo);
    if (!EmailValidation(managerInfo.email)) {
      setCheckErr({...checkErr, errMsg: '이메일 형식이 맞지 않습니다.'});
    } else if (!checkErr.checkEmail) {
      setCheckErr({...checkErr, errMsg: '이메일 중복확인을 진행해주세요.'});
    } else if (!checkErr.checkEmailSuccess) {
      setCheckErr({...checkErr, errMsg: '중복된 이메일입니다.'});
    } else if (!PhoneValidation(managerInfo.phone)) {
      setCheckErr({
        ...checkErr,
        errMsg: '휴대전화 번호 형식이 맞지 않습니다.',
      });
    } else if (!checkErr.checkPhone) {
      setCheckErr({...checkErr, errMsg: '휴대전화 인증을 진행해주세요.'});
    } else if (managerInfo.checkPhoneNum != managerInfo.receiveCheckPhoneNum) {
      setCheckErr({...checkErr, errMsg: '인증 번호가 일치하지 않습니다.'});
    } else if (managerInfo.checkPhoneNum == managerInfo.receiveCheckPhoneNum) {
      setCheckErr({...checkErr, checkPhoneSuccess: true});
    } else {
      setCheckErr({...checkErr, errMsg: ''});
    }
    for (let i = 0; i < managerInfoKey.length; i++) {
      if (managerInfo[managerInfoKey[i]] == '') {
        setCheckErr({...checkErr, errMsg: '빈칸을 모두 채워주세요.'});
        break;
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
              <ChangeProfileImage img={img} setImg={setImg} />
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

              {/* <ChangeInput
                title={'자격증1'}
                place1={'자격증 이름'}
                text={certificate1}
                setText1={setCertificate1}
              />
              <ChangeInput
                title={'자격증2'}
                place1={'자격증 이름'}
                text={certificate2}
                setText1={setCertificate2}
              />
              <ChangeInput
                title={'자격증3'}
                place1={'자격증 이름'}
                text={certificate3}
                setText1={setCertificate3}
              /> */}
            </View>
          </View>
          <View style={styles.wrapbtn}>
            <Text
              style={[
                typoStyles.fs13,
                typoStyles.fwRegular,
                typoStyles.textPrimary,
              ]}>
              {managerInfo.errMsg}
            </Text>
            <TouchableNativeFeedback
              onPress={() => ChangeManagerInfo(managerInfo)}>
              <View style={[btnStyles.btnDisable, styles.savebtn]}>
                <Text
                  style={[
                    typoStyles.fs20,
                    typoStyles.fwBold,
                    typoStyles.textWhite,
                  ]}>
                  변경 정보 저장
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </CommonLayout>
  );
};

export default ChangeInfo;
