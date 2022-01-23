import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import MapView from './src/MapView';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import EditNotice from './src/screens/service/editNotice';
import RequireDocument from './src/screens/service/requiredDocument';

const App = () => {
  return (
    <View style={styles.block}>
      {/* <StatusBar barStyle="dark-content" />
      <MapView
        appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
        style={styles.map}
        lat={48.577741}
        lng={27.602706}
      /> */}
      {/* <EditNotice /> */}
      <RequireDocument />
    </View>
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
