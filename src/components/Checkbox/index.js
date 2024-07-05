import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const Checkbox = ({checked, onCheck}) => {
  const ifChecked = () => {
    onCheck(!checked);
  };

  console.log('pressed a check box');

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={ifChecked}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);
