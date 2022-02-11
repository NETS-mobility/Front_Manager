import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {Calendar} from 'react-native-calendars';
import CalendarImage from '../../../assets/icon/calendar.svg';

const ServiceSearch = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setShowCalendar(!showCalendar)}>
        <Text
          style={[
            typoStyles.fs12,
            typoStyles.fw900,
            typoStyles.textExplainBold,
          ]}>
          날짜 선택
        </Text>
        <CalendarImage />
      </TouchableOpacity>
      {showCalendar ? (
        <View style={[styles.calendarBlock]}>
          <Calendar />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 20,
  },
  calendarBlock: {
    borderColor: '#737373',
    borderWidth: 2,
    marginTop: 10,
  },
});
export default ServiceSearch;
