import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableNativeFeedback,
  TouchableO,
} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 50,
    alignContent: 'space-between',
  },
  textset: {
    width: '83%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
});

const ArrowBtn = ({navWhere, contents}) => {
  return (
    <View style={[styles.btn, btnStyles.btnBlue]}>
      <TouchableNativeFeedback onPress={navWhere}>
        <View style={styles.textset}>
          <Text
            style={[typoStyles.fs18, typoStyles.fwBold, typoStyles.textWhite]}>
            {contents}
          </Text>
          <Text
            style={[typoStyles.fs18, typoStyles.fwBold, typoStyles.textWhite]}>
            {'>'}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export {ArrowBtn};
