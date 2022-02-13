import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Text} from 'react-native-svg';
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
  },
});

const ServiceTimePicker = () => {
  const [timetype, setTimetype] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');

  const placeholder1 = '시간대';
  const placeholder2 = '시';
  const placeholder3 = '분';

  const onChangeText = (value) => {
    console.warn(value);
    setTimetype(value);
  };

  const onChangeHour = (value) => {
    console.warn(value);
    setHour(value);
  };

  const onChangeMin = (value) => {
    console.warn(value);
    setMin(value);
  };

  return (
    <View style={styles.dateline}>
      <View style={[styles.frame]}>
        <RNPickerSelect
          textInputProps={{underlineColorAndroid: 'transparent'}}
          placeholder={{
            label: placeholder1,
          }}
          placeholderTextColor="black"
          fixAndroidTouchableBug={true}
          value={timetype}
          onValueChange={(value) => onChangeText(value)}
          useNativeAndroidPickerStyle={false}
          items={[
            {label: '오전', value: '오전', key: '1'},
            {label: '오후', value: '오후', key: '2'},
          ]}
          style={{
            placeholder: styles.timetext,
            inputAndroid: styles.timetext,
            inputIOS: styles.timetext,
          }}
        />
      </View>
      <View style={[styles.frame]}>
        <RNPickerSelect
          textInputProps={{underlineColorAndroid: 'transparent'}}
          placeholder={{
            label: placeholder2,
          }}
          placeholderTextColor="black"
          fixAndroidTouchableBug={true}
          value={hour}
          onValueChange={(value) => onChangeHour(value)}
          useNativeAndroidPickerStyle={false}
          items={[
            {label: '00', value: '0', key: '0'},
            {label: '01', value: '1', key: '1'},
            {label: '02', value: '2', key: '2'},
            {label: '03', value: '3', key: '3'},
            {label: '04', value: '4', key: '4'},
            {label: '05', value: '5', key: '5'},
            {label: '06', value: '6', key: '6'},
            {label: '07', value: '7', key: '7'},
            {label: '08', value: '8', key: '8'},
            {label: '09', value: '9', key: '9'},
            {label: '10', value: '10', key: '10'},
            {label: '11', value: '11', key: '11'},
            {label: '12', value: '12', key: '12'},
          ]}
          style={{
            placeholder: styles.timetext,
            inputAndroid: styles.timetext,
            inputIOS: styles.timetext,
          }}
        />
      </View>
      <View style={[styles.frame]}>
        <RNPickerSelect
          textInputProps={{underlineColorAndroid: 'transparent'}}
          placeholder={{
            label: placeholder3,
          }}
          placeholderTextColor="black"
          fixAndroidTouchableBug={true}
          value={min}
          onValueChange={(value) => onChangeMin(value)}
          useNativeAndroidPickerStyle={false}
          items={[
            {label: '00', value: '0', key: '0'},
            {label: '20', value: '20', key: '20'},
            {label: '40', value: '40', key: '40'},
          ]}
          style={{
            placeholder: styles.timetext,
            inputAndroid: styles.timetext,
            inputIOS: styles.timetext,
          }}
        />
      </View>
    </View>
  );
};

export {ServiceTimePicker};
