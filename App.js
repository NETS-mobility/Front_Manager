import React, {useState, useMemo, createContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {GetToken} from './src/utils/controlToken';
import BottomTab from './src/navigation/common/bottomTab';
import axios from 'axios';
// axios.defaults.baseURL = 'http://10.0.2.2:5000';
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
        <BottomTab />
      </View>
    </RefreshContext.Provider>
  );
};

const styles = StyleSheet.create({
  // map: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  block: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
