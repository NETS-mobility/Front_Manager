import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import ServiceDetailNavigator from '../service/serviceDetail';
import MypageNavigator from '../mypage/mypageMain/mypageMain';
import AlarmNavigator from '../alarm/alarm';
import HomeNavigator from '../home/home';
import {RefreshContext} from '../../../App';
import LoginNavigator from '../login/login';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {refresh, setRefresh} = useContext(RefreshContext);
  return (
    <NavigationContainer>
      {refresh == null ? (
        <LoginNavigator />
      ) : (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#19b7cd',
            tabBarStyle: {
              height: 65,
              position: 'absolute',
              bottom: 0,
            },
            tabBarLabelStyle: {
              fontSize: 13,
            },
          }}>
          <Tab.Screen
            name="홈"
            component={HomeNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={35} />
              ),
            }}
          />
          <Tab.Screen
            name="서비스내역"
            component={ServiceDetailNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="map" color={color} size={35} />
              ),
            }}
          />
          <Tab.Screen
            name="알림"
            component={AlarmNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="notifications" color={color} size={35} />
              ),
            }}
          />
          <Tab.Screen
            name="마이페이지"
            component={MypageNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Icon name="person" color={color} size={35} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default BottomTab;
