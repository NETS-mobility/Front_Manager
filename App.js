import React, {useState, useMemo, createContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomTab from './src/navigation/common/bottomTab';
import {GetToken} from './src/utils/controlToken';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './src/navigation/login/login';
import messaging from '@react-native-firebase/messaging';
axios.defaults.baseURL = 'http://35.197.107.190:5000';

export const RefreshContext = createContext({
  refresh: false,
  setRefresh: () => {},
});

const App = () => {
  const [refresh, setRefresh] = useState();
  const value = useMemo(() => ({refresh, setRefresh}), [refresh, setRefresh]);
  const mainR = async () => {
    await GetToken().then((r) => setRefresh(r));
  };

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
  });

  useEffect(() => {
    mainR();
  }, []);

  return (
    <RefreshContext.Provider value={value}>
      <View style={styles.block}>
        {refresh == null ? (
          <NavigationContainer>
            <LoginNavigator />
          </NavigationContainer>
        ) : (
          // <NavigationContainer>
          //   <Stack.Navigator
          //     screenOptions={{
          //       tabBarActiveTintColor: '#19b7cd',
          //       tabBarStyle: {
          //         height: 65,
          //         position: 'absolute',
          //         bottom: 0,
          //       },
          //       tabBarLabelStyle: {
          //         fontSize: 13,
          //       },
          //     }}>
          //     <Tab.Screen
          //       name="홈"
          //       component={LoginNavigator}
          //       options={{
          //         headerShown: false,
          //         tabBarIcon: ({color}) => (
          //           <Icon name="home" color={color} size={35} />
          //         ),
          //       }}
          //     />
          //   </Stack.Navigator>
          // </NavigationContainer>
          <BottomTab />
        )}
      </View>
    </RefreshContext.Provider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
