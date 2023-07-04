import {View, Text, Image, SafeAreaView} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import styles from './styles';

const FeedPost = () => {
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

export default FeedPost;
