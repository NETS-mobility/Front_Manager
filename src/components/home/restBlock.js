import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {btnStyles} from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';

const RestBlock = () => {
  return (
    <View style={styles.restBlock}>
      <Text style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fw900]}>
        현재 휴게 중
      </Text>
      <Text
        style={[
          typoStyles.fs20,
          typoStyles.textExplainBold,
          typoStyles.fw900,
          styles.timeText,
        ]}>
        시작 시간: 13:11
      </Text>

      <View style={styles.btns}>
        <TouchableOpacity
          style={[btnStyles.btnDisableOnlyBorder, styles.singleBtn]}>
          <Text
            style={[typoStyles.textDisable, typoStyles.fs20, typoStyles.fw900]}>
            휴게 시작
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[btnStyles.btnBlue, styles.singleBtn]}>
          <Text
            style={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw900]}>
            휴게 종료
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 141,
    backgroundColor: '#fff',
    paddingHorizontal: 31,
    paddingVertical: 17,
    borderColor: '#737373',
    borderTopColor: 2,
    borderBottomWidth: 2,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  singleBtn: {
    width: 142,
    height: 47,
  },
  timeText: {
    marginBottom: 15,
  },
});

export default RestBlock;
