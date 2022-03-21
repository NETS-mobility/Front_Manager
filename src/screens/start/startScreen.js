import NetsLogo from '../../assets/icon/logo_blue.svg';
import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';

const StartScreen = () => {
  return (
    <SafeAreaView style={styles.first}>
      <View style={styles.setcenter}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#fff',
  },
  line: {
    backgroundColor: '#19B7CD',
    width: '100%',
    height: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 30,
  },
  text: {
    backgroundColor: 'white',
    width: '35%',
    textAlign: 'center',
  },
  logotext: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  setcenter: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default StartScreen;
