import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Splash from './src/screens/auth/Splash';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Splash />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
