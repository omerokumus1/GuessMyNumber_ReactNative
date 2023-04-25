import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('pressed');
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressableContainer, styles.pressed]
            : styles.pressableContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressableContainer: {
    width: '100%',
    paddingVertical: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
