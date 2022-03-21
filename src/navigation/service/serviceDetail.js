import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ServiceDetail, ServiceHistory} from '../../screens/service';
import { RequiredDocument } from '../../screens/service';

const Stack = createNativeStackNavigator();

const ServiceDetailNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ServiceHistory"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ServiceHistory" component={ServiceHistory} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
      <Stack.Screen name="RequiredDocument" component={RequiredDocument} />
    </Stack.Navigator>
  );
};

export default ServiceDetailNavigator;
