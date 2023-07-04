import {View, StyleSheet} from 'react-native';

import fonts from './src/theme/fonts';
import colors from './src/theme/colors';
import FeedPost from './src/components/FeedPost';

const App = () => {
  return (
    <View style={styles.container}>
      <FeedPost />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
