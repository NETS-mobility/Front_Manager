import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlarmScreen from '../../screens/alarm/alarmScreen';
import {EditNotice} from '../../screens/service';
import {ServiceDetail} from '../../screens/service';
const Stack = createNativeStackNavigator();

const AlarmNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Alarm"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Alarm" component={AlarmScreen} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
      <Stack.Screen name="EditNotice" component={EditNotice} />
    </Stack.Navigator>
  );
};

export default AlarmNavigator;
