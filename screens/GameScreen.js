import { Alert, FlatList, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max) {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
}

let min = 0;
let max = 100;
const initialGuess = generateRandomBetween(min, max);
function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessCount = guessRounds.length;

  //   if (userNumber === currentGuess) {
  //     Alert.alert('Got you!', 'I found the number.', [
  //       { text: 'Well done.', style: 'cancel', onPress: onGameOver },
  //     ]);
  //   }

  function gameOverHandler() {
    onGameOver(guessCount);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      Alert.alert('Got you!', 'I found the number.', [
        { text: 'Well done.', style: 'cancel', onPress: gameOverHandler },
      ]);
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  function guessHigher() {
    if (userNumber > currentGuess) {
      min = currentGuess + 1;
      const guess = generateRandomBetween(min, max);
      setCurrentGuess(guess);
      setGuessRounds((prevGuessRounds) => [guess, ...prevGuessRounds]);
    } else {
      showAlert();
    }
  }
  function guessLower() {
    if (userNumber < currentGuess) {
      max = currentGuess - 1;
      const guess = generateRandomBetween(min, max);
      setCurrentGuess(guess);
      setGuessRounds((prevGuessRounds) => [guess, ...prevGuessRounds]);
    } else {
      showAlert();
    }
  }

  function showAlert() {
    Alert.alert("Don't lie!", 'You know that is wrong...', [
      { text: 'Sorry!', style: 'cancel' },
    ]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={{ marginBottom: 24 }}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessHigher}>
              <Ionicons name="md-add" size={24} color={'white'} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessLower}>
              <Ionicons name="md-remove" size={24} color={'white'} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.guessRoundContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessCount - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
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
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  guessRoundContainer: {
    flex: 1,
    padding: 16,
  },
});
