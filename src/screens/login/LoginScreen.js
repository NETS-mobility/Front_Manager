import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import NetsLogo from '../../assets/icon/logo_blue.svg';
import {LoginInputBox} from '../../components/login/LoginInputBox';
import {LoginBtn} from '../../components/login/LoginBtn';
import typoStyles from '../../assets/fonts/typography';
import LoginAPI from '../../api/login';
import {RefreshContext} from '../../../App';
import AsyncStorage from '@react-native-community/async-storage';
// import {TOKEN} from '../../..';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {refresh, setRefresh} = useContext(RefreshContext);
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
              const res = await LoginAPI({
                id: email,
                password: pass,
                deviceToken: await AsyncStorage.getItem('deviceToken'),
              });
              if (res.success === true) {
                if (res.checkPhone == '최초 로그인 휴대폰 인증 필요') {
                  navigation.navigate('AuthScreen');
                } else {
                  navigation.navigate('HomeScreen');
                }
                setRefresh(true);
              } else {
                setRefresh(null);
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
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  line: {
    backgroundColor: '#19B7CD',
    width: '100%',
    height: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10,
  },
  text: {
    backgroundColor: 'white',
    width: '35%',
    textAlign: 'center',
  },
  logotext: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 70,
  },
  inputbox: {
    marginBottom: 50,
  },
  managertext: {
    fontSize: 15,
    color: '#737373',
  },
  setcenter: {
    alignItems: 'center',
  },
});

export default LoginScreen;
