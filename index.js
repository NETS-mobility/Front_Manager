/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import app from '@react-native-firebase/app';

PushNotification.configure({
  // (optional) 토큰이 생성될 때 실행됨(토큰을 서버에 등록할 때 쓸 수 있음)
  onRegister: async function (token) {
    let TOKEN;
    TOKEN = token.token;
    try {
      await AsyncStorage.setItem('deviceToken', TOKEN);
      console.log('TOKEN:', TOKEN);
      console.log('deviceToke=', await AsyncStorage.getItem('deviceToken'));
    } catch (e) {
      console.log('error!', e);
    }
  },

  onNotification: function (notification) {
    console.log('[App] onNotification : notify :', notification);
    PushNotification.localNotification({
      title: notification.data.title || ' ',
      message: notification.data.body || ' ',
      userInteraction: true,
      priority: 'high',
      id: 0,
      authCancel: true,
      importance: 'high',
      visibility: 'public',
      content_available: true,
      soundName: 'default',
      playSound: true,
      foreground: true,
    });
  },

  // onMessage: async function (remoteMessage) {
  //   console.log('[FCMService] A new FCM message arrived', remoteMessage);
  //   if (remoteMessage) {
  //     let notification = null;
  //     if (Platform.OS === 'ios') {
  //       notification = remoteMessage.data.notification;
  //     } else {
  //       notification = remoteMessage.notification;
  //     }
  //     onNotification(notification);
  //   }
  // },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

// messaging().setOpenSettingsForNotificationsHandler((remoteMessage) => {
//   console.log('Message handled in the OpenSettings!', remoteMessage);
// });

// PushNotification.createChannel(
//   {
//     channelId: 'riders', // (required)
//     channelName: '앱 전반', // (required)
//     channelDescription: '앱 실행하는 알림', // (optional) default: undefined.
//     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//     importance: 4, // (optional) default: 4. Int value of the Android notification importance
//     vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
//   },
//   (created) => console.log(`createChannel riders returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
// );

AppRegistry.registerComponent(appName, () => App);
