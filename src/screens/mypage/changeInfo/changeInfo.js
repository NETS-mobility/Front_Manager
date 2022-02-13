import React, {useState} from 'react';
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
  const [img, setImg] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [notice, setNotice] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [certificate1, setCertificate1] = useState('');
  const [certificate2, setCertificate2] = useState('');
  const [certificate3, setCertificate3] = useState('');

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
                place1={'안녕하세요'}
                Text1={introduce}
                setText1={setIntroduce}
                image={false}
              />
              <ChangeBigInput
                title={'전달사항'}
                place1={
                  '네츠 매니저 김지수입니다.\n예약 30분 전 미리 연락 드리겠습니다:)\n번호 010-0000-0000입니다.'
                }
                Text1={introduce}
                setText1={setIntroduce}
                image={true}
              />
              <ChangeInput
                title={'이름'}
                place1={'이름'}
                Text1={name}
                setText1={setName}
              />
              <ChangeInputWithBtn
                title={'이메일'}
                place1={'이메일'}
                Text1={email}
                setText1={setEmail}
                btntext={'중복확인'}
              />
              <ChangeInputWithBtn
                title={'휴대전화'}
                place1={'휴대전화'}
                Text1={phone}
                setText1={setPhone}
                btntext={'인증번호전송'}
              />
              <ChangeInput
                title={'자격증1'}
                place1={'자격증 이름'}
                Text1={certificate1}
                setText1={setCertificate1}
              />
              <ChangeInput
                title={'자격증2'}
                place1={'자격증 이름'}
                Text1={certificate2}
                setText1={setCertificate2}
              />
              <ChangeInput
                title={'자격증3'}
                place1={'자격증 이름'}
                Text1={certificate3}
                setText1={setCertificate3}
              />
            </View>
          </View>
          <View style={styles.wrapbtn}>
            <TouchableNativeFeedback>
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
