import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from "../../screens/start/startScreen";

const Stack = createNativeStackNavigator();

const StartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
    </Stack.Navigator>
  );
};

export default StartNavigator;
