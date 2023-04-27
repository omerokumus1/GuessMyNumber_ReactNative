import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';

function StyledTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default StyledTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
  },
});
