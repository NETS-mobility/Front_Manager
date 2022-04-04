import React, {useState, useMemo, createContext, useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import BottomTab from './src/navigation/common/bottomTab';
import {GetToken} from './src/utils/controlToken';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './src/navigation/login/login';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import LocalNotification from './src/components/pushNoti/localPush';
import RemotePushController from './src/components/pushNoti/remotePush';

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

  useEffect(() => {
    mainR();
    // const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    //   PushNotification.localNotification({
    //     message: remoteMessage.data.body,
    //     title: remoteMessage.data.title,
    //     bigPictureUrl: remoteMessage.notification.android.imageUrl,
    //     smallIcon: remoteMessage.notification.android.imageUrl,
    //   });
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //   PushNotification.invokeApp(remoteMessage);
    // });
    // return unsubscribe;
  }, []);

  return (
    <RefreshContext.Provider value={value}>
      <View style={styles.block}>
        <RemotePushController />
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
          <>
            <BottomTab />
          </>
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
