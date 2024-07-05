import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, style}) => {
  console.log('inner button');
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
