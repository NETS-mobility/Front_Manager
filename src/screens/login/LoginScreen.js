import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import NetsLogo from '../../assets/image/logo.svg';
import LoginInputBox from '../../components/login/LoginInputBox';
import {LoginBtn} from '../../components/login/LoginBtn';
import typoStyles from '../../assets/fonts/typography';
import LoginAPI from '../../api/login';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <View style={styles.logotext}>
          <NetsLogo style={styles.logo} />
          <View style={styles.line}>
            <Text
              style={[
                typoStyles.fs20,
                typoStyles.textMain,
                typoStyles.fwBold,
                styles.text,
              ]}>
              for 네츠매니저
            </Text>
          </View>
        </View>
        <View style={styles.setcenter}>
          <View style={styles.inputbox}>
            <LoginInputBox
              isPass={false}
              placeHolder={'이메일'}
              Text={email}
              setText={setEmail}
            />
            <LoginInputBox
              isPass={true}
              placeHolder={'비밀번호'}
              Text={pass}
              setText={setPass}
            />
          </View>
          <LoginBtn
            btnName={'로그인'}
            navWhere={async () => {
              const res = await LoginAPI({id: email, password: pass});
              if (res.success === true) {
                if (res.checkPhone == '최초 로그인 휴대폰 인증 필요') {
                  navigation.navigate('AuthScreen');
                } else {
                  navigation.navigate('HomeScreen');
                }
              } else {
                console.log('에러임');
              }
            }}
          />
          <TouchableOpacity onPress={() => Linking.openURL(`tel:02-0000-0000`)}>
            <Text style={styles.managertext}>관리자 문의</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  netImg: {
    marginBottom: 72,
  },

  inputBox: {
    marginTop: 57,
  },

  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LoginScreen;
