import {Text, Image, View} from 'react-native';
import {styles} from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../assets/splash_image.png')}
      />
      <Text style={styles.title}>You’ll Find Here!</Text>
      <Text style={[styles.innerTitle, styles.title]}>All you need</Text>
      <Text style={styles.title}>Here!</Text>
    </View>
  );
};

export default Splash;
