import {Text, Image, View, Pressable, ScrollView} from 'react-native';
import {useState} from 'react';

import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Sepertor from '../../../components/Sepertor';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log('Sign in');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />

      <Input label="Name" placeholder="John Doe" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input label="Password" isPassword placeholder="**********" />

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>

      <Button style={styles.button} title="Sign Up" />

      <Sepertor text="Or sign up with" />

      <GoogleLogin />

      <Text onPress={onSignIn} style={styles.footerText}>
        Already have an account?{' '}
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signup;
