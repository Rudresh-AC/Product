import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID =
  '992054076018-bnptlngaphuclr9a95an2n3i3aoorsv8.apps.googleusercontent.com';
const IOS_CLIENT_ID =
  '992054076018-3pq8fqhkgmo9ttvr1idsckeg1qi8hjgl.apps.googleusercontent.com';

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
    });
  }, []);

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
