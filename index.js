/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';
// import React, {createContext} from 'react';

// export const TOKEN = createContext();

PushNotification.configure({
  // (optional) 토큰이 생성될 때 실행됨(토큰을 서버에 등록할 때 쓸 수 있음)
  onRegister: function (token) {
    let TOKEN;
    TOKEN = token.token;
    try {
      AsyncStorage.setItem('deviceToken', TOKEN);
      console.log('TOKEN:', TOKEN);
    } catch (e) {
      console.log('error!', e);
    }
  },
});

AppRegistry.registerComponent(appName, () => App);
