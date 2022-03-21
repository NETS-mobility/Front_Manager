import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, LoginScreen} from '../../screens/login';
import Home from '../../screens/home/home';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
