import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import fonts from './src/theme/fonts';
import colors from './src/theme/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>sam mendes</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Liked by <Text style={styles.boldLikedText}>mendesmendes</Text> and{' '}
            <Text style={styles.boldLikedText}>90 others</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldLikedText}>sammendes</Text> Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Nihil nulla accusantium
            quas quibusdam numquam fugit molestiae facilis mollitia dolores,
            molestias quisquam non debitis eos quaerat temporibus quia impedit.
            Accusamus, magni!
          </Text>
          <Text style={styles.viewAllCommentsText}>View all 16 comments</Text>
          <View style={styles.comments}>
            <Text style={styles.commentsText}>
              <Text style={styles.boldLikedText}>sammendes</Text> Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Nihil nulla
              accusantium quas quibusdam numquam.
            </Text>
            <AntDesign
              name={'hearto'}
              style={styles.icon}
              color={colors.black}
            />
          </View>
          <Text style={styles.viewAllCommentsText}>04 July 2023</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  post: {},
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  boldLikedText: {
    fontWeight: fonts.weight.bold,
  },
  text: {
    color: colors.black,
    lineHeight: 20,
  },
  viewAllCommentsText: {
    color: colors.grey,
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  commentsText: {
    color: colors.black,
    flex: 1,
  },
});
