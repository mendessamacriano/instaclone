import {View, Text, StyleSheet} from 'react-native';
import colors from './src/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import font from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <AntDesign name="downcircleo" size={32} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  text: {
    fontSize: font.size.lg,
  },
});
