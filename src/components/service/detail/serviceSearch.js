import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {Calendar} from 'react-native-calendars';
import CalendarImage from '../../../assets/icon/calendar.svg';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

const ServiceSearch = ({pickedDate, setPickedDate}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setShowCalendar(!showCalendar)}>
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw900,
            typoStyles.textExplainBold,
          ]}>
          {pickedDate == '' ? '날짜 선택' : pickedDate}
        </Text>
        <CalendarImage />
      </TouchableOpacity>
      {showCalendar ? (
        <View style={[styles.calendarBlock]}>
          <Calendar
            onDayPress={(day) => {
              setPickedDate(day.dateString);
            }}
            markedDates={{
              [pickedDate]: {
                selected: true,
                marked: true,
                selectedColor: '#19b7cd',
              },
            }}
            monthFormat={'yyyy년 MM월'}
          />
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
