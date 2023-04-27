import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/Colors';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function enteredTextHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be between 1-99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
    } else {
      onPickNumber(chosenNumber);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={enteredTextHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // borderColor: 'white',
    // borderWidth: 2,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
