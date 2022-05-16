import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import CommonLayout from '../../components/common/layout';
import typoStyles from '../../assets/fonts/typography';
import {AlarmBox} from '../../components/alarm/alarmBox';
import ViewAlarm from '../../api/alarm/viewAlarm';

const styles = StyleSheet.create({
  title: {
    marginLeft: 30,
    marginBottom: 20,
  },
});

const AlarmScreen = ({navigation}) => {
  const [alarms, setAlarms] = useState([]);
  const [reload, setReload] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onReload = useCallback(() => {
    setReload(true);
    wait(1000).then(() => {
      fetchData();
      setReload(false);
    });
  }, []);

  const fetchData = async () => {
    setAlarms(await ViewAlarm());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CommonLayout>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={reload} onRefresh={onReload} />
        }>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
            알림
          </Text>
        </View>
        {alarms != undefined &&
          alarms.map((data, i) => {
            if (data?.alarm_title == '예약확정') {
              return (
                <AlarmBox
                  navigation={navigation}
                  alarmName={'예약 확정 알림'}
                  alarmExplain={
                    '새로운 예약이 있습니다. 전달 사항을 전송해주세요.'
                  }
                  alarmTime={'2021년 10월 11일 12시 30분'}
                  btnName={'추가 결제 하기'}
                />
              );
            } else {
              return (
                <AlarmBox
                  navigation={navigation}
                  alarmName={'운행 하루 전 알림'}
                  alarmExplain={
                    '서비스 시작 하루 전입니다.\n고객님께 해피콜 해주세요.'
                  }
                  alarmTime={'2021년 10월 11일 12시 30분'}
                  btnName={'상세보기'}
                />
              );
            }
          })}
      </ScrollView>
    </CommonLayout>
  );
};

export default AlarmScreen;
