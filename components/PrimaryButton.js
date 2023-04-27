import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressableContainer, styles.pressed]
            : styles.pressableContainer
        }
        onPress={onPress}
        android_ripple={{
          color: Colors.primary600,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
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
