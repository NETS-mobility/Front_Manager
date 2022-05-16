import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';
import {DeleteBreak, GetBreak, SetBreak} from '../../utils/setBreakTime';
import ToKoreanTime from '../../utils/toKoreanTime';
import CustomBtn from '../common/button';
import SetBreakTime from '../../api/home/setBreakTime';

const RestBlock = () => {
  const [dis, setDis] = useState(true);
  const [viewTime, setViewTime] = useState('');
  const setBreakState = async () => {
    if ((await GetBreak()) != null) {
      setDis(false);
    } else {
      setDis(true);
    }
  };
  useEffect(() => {
    setBreakState();
  }, [dis]);
  return (
    <View style={styles.restBlock}>
      {dis ? (
        <>
          <Text
            style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fw900]}>
            휴게 중이 아닙니다.
          </Text>
          <Text
            style={[
              typoStyles.fs20,
              typoStyles.textExplainBold,
              typoStyles.fw900,
              styles.timeText,
            ]}>
            시작 시 버튼 클릭
          </Text>
        </>
      ) : (
        <>
          <Text
            style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fw900]}>
            현재 휴게 중
          </Text>
          <Text
            style={[
              typoStyles.fs20,
              typoStyles.textExplainBold,
              typoStyles.fw900,
              styles.timeText,
            ]}>
            시작 시간: {viewTime}
          </Text>
        </>
      )}
      {/* <Text style={[typoStyles.fs20, typoStyles.textMain, typoStyles.fw900]}>
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
      </Text> */}

      <View style={styles.btns}>
        <CustomBtn
          viewStyle={[btnStyles.btnBlue, styles.singleBtn]}
          textStyle={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textWhite]}
          viewStyleDisabled={[btnStyles.btnDisableOnlyBorder, styles.singleBtn]}
          textStyleDisabled={[
            typoStyles.fs20,
            typoStyles.fwBold,
            typoStyles.textExplain,
          ]}
          text={'휴게 시작'}
          disabled={!dis}
          onPress={() => {
            const time = ToKoreanTime();
            setDis(false);
            SetBreak(time);
            SetBreakTime(time, 1);
            setViewTime(time.substring(0, 5));
          }}
        />
        <CustomBtn
          viewStyle={[btnStyles.btnBlue, styles.singleBtn]}
          textStyle={[typoStyles.fs20, typoStyles.fwBold, typoStyles.textWhite]}
          viewStyleDisabled={[btnStyles.btnDisableOnlyBorder, styles.singleBtn]}
          textStyleDisabled={[
            typoStyles.fs20,
            typoStyles.fwBold,
            typoStyles.textExplain,
          ]}
          text={'휴게 종료'}
          disabled={dis}
          onPress={async () => {
            console.log('break time이 나온당', await GetBreak());
            const time = ToKoreanTime();
            SetBreakTime(time, 2);
            setDis(true);
            DeleteBreak();
          }}
        />
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
    borderTopWidth: 2,
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
