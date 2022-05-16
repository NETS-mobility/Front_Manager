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
      <ScrollView>
        <SafeAreaView style={styles.background}>
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
                    key={i}
                    navigation={() =>
                      navigation.push('EditNotice', {
                        detailId: data?.alarm_object_data?.reservation_id,
                      })
                    }
                    alarmName={data?.alarm_title}
                    alarmExplain={
                      '새로운 예약이 확정되었습니다. 전달 사항을 전송해주세요.'
                    }
                    alarmTime={data?.alarm_object_data?.reservation_date}
                  />
                );
              } else {
                return (
                  <AlarmBox
                    key={i}
                    navigation={() => {
                      navigation.navigate('ServiceDetail', {
                        detailId: data?.alarm_object_data?.reservation_id,
                      });
                    }}
                    alarmName={data?.alarm_title}
                    alarmExplain={data?.alarm_content}
                    alarmTime={data?.alarm_object_data?.reservation_date}
                    btnName={'상세보기'}
                  />
                );
              }
            })}
        </SafeAreaView>

      </ScrollView>
    </CommonLayout>
  );
};

export default AlarmScreen;
