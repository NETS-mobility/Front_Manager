import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import MapView from './src/MapView';
import StartScreen from './src/screen/start/startScreen';
import LoginScreen from './src/screen/login/loginScreen';
import AuthScreen from './src/screen/login/authScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <MapView
    //     appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
    //     style={styles.map}
    //     lat={48.577741}
    //     lng={27.602706}
    //   />
    // </>
      <AuthScreen />
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
});

export default App;
