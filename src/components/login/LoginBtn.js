import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  loginBtn: {
    width: 245,
    height: 52,
    marginBottom: 16,
  },
  okbtn: {
    width: 245,
    height: 47,
  },
});

const LoginBtn = ({navWhere, btnName}) => {
  return (
    <TouchableOpacity onPress={navWhere}>
      <View style={[btnStyles.btnWhite, styles.loginBtn]}>
        <Text style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fwBold]}>
          {btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const OkBtn = ({navWhere, btnName}) => {
  return (
    <TouchableOpacity onPress={navWhere}>
      <View style={[btnStyles.btnBlue, styles.okbtn]}>
        <Text
          style={[typoStyles.fs20, typoStyles.textWhite, typoStyles.fwBold]}>
          {btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export {LoginBtn, OkBtn};
