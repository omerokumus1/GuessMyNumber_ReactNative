import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from '/constants/Colors';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  function pickNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber);
    console.log('pickedNumber: ', pickedNumber);
  }

  const screen = pickedNumber ? (
    <GameScreen />
  ) : (
    <StartGameScreen onPickNumber={pickNumberHandler} />
  );

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.root}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
