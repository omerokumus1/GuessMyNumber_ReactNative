import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  console.log('App rendered');

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber);
  }

  function gameOverHandler(guessCount) {
    console.log('gameOverHandler');
    setIsGameOver(true);
    setGuessCount(guessCount);
  }

  function startNewGameHandler() {
    setPickedNumber(null);
    setGuessCount(0);
    setIsGameOver(false); // may be problematic
  }

  let screen = null;
  if (isGameOver) {
    screen = (
      <GameOverScreen
        pickedNumber={pickedNumber}
        guessCount={guessCount}
        startNewGameHandler={startNewGameHandler}
      />
    );
  } else if (!pickedNumber) {
    screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  } else {
    screen = (
      <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
    );
  }

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
