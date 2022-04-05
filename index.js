/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';
import * as RootNavigation from './src/navigation/RootNavigation';

PushNotification.createChannel(
  {
    channelId: 'fcm_fallback_notification_channel', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
    AsyncStorage.setItem('deviceToken', token.token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('REMOTE NOTIFICATION ==>', notification);
    if (!notification.userInteraction) {
      LocalNotification(notification);
    }
    if (notification.userInteraction) {
      RootNavigation.navigate('알림', '');
    }
  },

  // Android only: GCM or FCM Sender ID
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  senderID: '334463887636',
  popInitialNotification: true,
  requestPermissions: true,
});

export const LocalNotification = (notification) => {
  PushNotification.localNotification({
    channelId: `${notification.channelId}`,
    autoCancel: true,
    bigText: `${notification.data.body}`,
    title: `${notification.data.title}`,
    userInteraction: false,
    message: '더 보려면 아래로 늘리세요',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    importance: 'high',
    onlyAlertOnce: true,
  });
};

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
