import { StyleSheet, View, Image } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
