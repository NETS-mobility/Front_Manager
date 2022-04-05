import React, {useState, useMemo, createContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomTab from './src/navigation/common/bottomTab';
import {GetToken} from './src/utils/controlToken';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './src/navigation/login/login';
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
  }, []);

  return (
    <RefreshContext.Provider value={value}>
      <View style={styles.block}>
        {refresh == null ? (
          <NavigationContainer>
            <LoginNavigator />
          </NavigationContainer>
        ) : (
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
