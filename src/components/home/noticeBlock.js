import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
const styles = StyleSheet.create({
  notiBlock: {
    width: 330,
    paddingHorizontal: 42,
    paddingVertical: 17,
    backgroundColor: '#19b7cd',
    borderWidth: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 18,
  },
  contents: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 5,
    borderWidth: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  marginText: {
    marginTop: 10,
  },
});

const NoticeBlock = ({data}) => {
  return (
    <View style={styles.notiBlock}>
      <Text style={[typoStyles.textWhite, typoStyles.fs20, typoStyles.fw700]}>
        최지우님, 안녕하세요!
      </Text>
      <Text
        style={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fwRegular]}>
        예약된 서비스가 있습니다.
      </Text>
      <View style={styles.contents}>
        <Text
          style={[
            typoStyles.textExplainBold,
            typoStyles.fs15,
            typoStyles.fw700,
          ]}>
          {`2022년 3월 19일\n네츠 휠체어 플러스`}
        </Text>
      </View>
    </View>
  );
};

export {NoticeBlock};
