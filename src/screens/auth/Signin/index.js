import React from 'react';
import {Text, Image, ScrollView} from 'react-native';

import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Sepertor from '../../../components/Sepertor';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  const onSignUp = () => {
    console.log('Hello');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />

      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input label="Password" isPassword placeholder="**********" />

      <Button style={styles.button} title="Sign In" />

      <Sepertor text="Or sign in with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text onPress={onSignUp} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signin);
