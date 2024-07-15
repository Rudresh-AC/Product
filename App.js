import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Splash /> */}
      {/* <Signup /> */}
      <Signin />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
