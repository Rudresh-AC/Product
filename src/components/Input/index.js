import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisible, setIsPasswordVissible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVissible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#C5C5C5"
          secureTextEntry={isPassword && !isPasswordVisible}
        />

        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eye_closed.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
