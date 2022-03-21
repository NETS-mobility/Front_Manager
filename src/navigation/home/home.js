import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/home';
import ServiceDetail from '../../screens/service/detail/serviceDetail';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
