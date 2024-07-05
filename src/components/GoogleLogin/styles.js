import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    borderRadius: 14,
    width: '45%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
});
