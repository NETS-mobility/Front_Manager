import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  SafeAreaView,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import ServiceBlock from '../../../components/service/serviceBlock';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import BlueBlock from '../../../components/mypage/blueBlock';
import {ArrowBtn} from '../../../components/mypage/arrowBtn';
import {btnStyles} from '../../../components/common/button';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    // height: '100vh',
  },
  title: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  logoutbtn: {
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changebtn: {
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setcenter: {
    alignItems: 'center',
  },
  usertext: {
    color: 'black',
  },
  infoalign: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowset: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 400,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

const MypageMain = ({navigation}) => {
  return (
    <CommonLayout>
      {/* <SafeAreaView style={styles.background}> */}
      <ScrollView style={styles.background}>
        <View style={styles.setcenter}>
          <View style={styles.title}>
            <Text
              style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
              마이페이지
            </Text>
            <TouchableNativeFeedback>
              <View style={[btnStyles.btnBlue, styles.logoutbtn]}>
                <Text
                  style={[
                    typoStyles.fs14,
                    typoStyles.fwBold,
                    typoStyles.textWhite,
                  ]}>
                  로그아웃
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <BlueBlock>
          <View style={styles.setcenter}>
            <View style={styles.infoalign}>
              <Text
                style={[typoStyles.fs20, typoStyles.fwBold, styles.usertext]}>
                최지우 매니저님
              </Text>
              <TouchableNativeFeedback
                onPress={() => {
                  navigation.push('ChangeInfo');
                }}>
                <View style={[btnStyles.btnBlue, styles.changebtn]}>
                  <Text
                    style={[
                      typoStyles.fs14,
                      typoStyles.fwBold,
                      typoStyles.textWhite,
                    ]}>
                    내 정보 수정
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </BlueBlock>
        <View style={styles.arrowset}>
          <ArrowBtn contents={'차량 수리/점검 등록'} />
          <ArrowBtn contents={'휠체어/리프트 수리/점검 등록'} />
          <ArrowBtn contents={'휴가 등록'} />
          <ArrowBtn contents={'공지사항'} />
          <ArrowBtn contents={'FAQ'} />
          <ArrowBtn contents={'비밀번호 변경'} />
          <ArrowBtn contents={'약관 상세 확인'} />
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </CommonLayout>
  );
};

export default MypageMain;
