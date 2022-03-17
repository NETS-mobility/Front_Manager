import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Button, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import typoStyles from '../../../assets/fonts/typography';

const styles = StyleSheet.create({
  frame: {
    width: 75,
    height: 52,
    borderTopColor: '#DAD8E0',
    borderTopWidth: 2,
    borderBottomColor: '#DAD8E0',
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  dateline: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  timetext: {
    fontSize: 18,
    fontWeight: '700',
    color: '#737373',
  },
  divtext: {
    fontSize: 18,
    fontWeight: '700',
    color: '#737373',
    backgroundColor: '#700000',
  },
});

Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return (h == d.getHours() % 12 ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};
String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

const ServiceTimePicker = ({setTime}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [picktime, setPickTime] = useState(':');
  const [timeArr, setTimeArr] = useState([]);
  const [timeShow, setTimeShow] = useState({type: '시간대', hour: '', min: ''});

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    setPickTime(time.format('HH:mm'));
    hideDatePicker();
  };

  useEffect(() => {
    setTime(picktime);
    setTimeArr(picktime.split(':'));
  }, [picktime]);

  useEffect(() => {
    console.log('timeArr==>', timeArr);
    if (parseInt(timeArr[0]) > 11) {
      setTimeShow({
        ...timeShow,
        type: '오후',
        hour: String(parseInt(timeArr[0]) - 12),
        min: timeArr[1],
      });
    } else if (parseInt(timeArr[0]) <= 11) {
      setTimeShow({
        ...timeShow,
        type: '오전',
        hour: timeArr[0],
        min: timeArr[1],
      });
    }
  }, [timeArr]);

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.dateline}>
          <View style={styles.frame}>
            <Text
              style={[
                typoStyles.fs18,
                typoStyles.fw700,
                typoStyles.textExplain,
              ]}>
              {timeShow.type}
            </Text>
          </View>
          <View style={[styles.frame]}>
            <Text
              style={[
                typoStyles.fs18,
                typoStyles.fw700,
                typoStyles.textExplain,
                styles.timetext,
              ]}>
              {timeShow.hour + '시'}
            </Text>
          </View>
          <View style={[styles.frame]}>
            <Text
              style={[
                typoStyles.fs18,
                typoStyles.fw700,
                typoStyles.textExplain,
              ]}>
              {timeShow.min + '분'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export {ServiceTimePicker};
