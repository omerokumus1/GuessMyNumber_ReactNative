import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;
  while (rndNum === exclude) {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  }

  return rndNum;
}

let min = 0;
let max = 100;
const initialGuess = generateRandomBetween(min, max, -1);
function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  if (userNumber === currentGuess) {
    Alert.alert('Got you!', 'I found the number.', [
      { text: 'Well done.', style: 'cancel', onPress: onGameOver },
    ]);
  }

  function guessHigher() {
    if (userNumber > currentGuess) {
      min = currentGuess;
      setCurrentGuess(generateRandomBetween(min, max, currentGuess));
    } else {
      Alert.alert("Don't lie!", 'You know that is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }
  }
  function guessLower() {
    if (userNumber < currentGuess) {
      max = currentGuess;
      setCurrentGuess(generateRandomBetween(min, max, currentGuess));
    } else {
      Alert.alert("Don't lie!", 'You know that is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={guessHigher}>+</PrimaryButton>
          <PrimaryButton onPress={guessLower}>-</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
