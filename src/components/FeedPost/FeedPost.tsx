import {View, Text, Image, SafeAreaView} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Comments from '../Comments';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import styles from './styles';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  return (
    <SafeAreaView style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
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
            Liked by{' '}
            <Text style={styles.boldLikedText}>{post.user.username}</Text> and{' '}
            <Text style={styles.boldLikedText}>{post.nofLikes} others</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldLikedText}>{post.user.username}</Text>{' '}
            {post.description}
          </Text>
          <Text style={styles.viewAllCommentsText}>
            View all {post.nofComments} comments
          </Text>
          {post.comments.map(comment => (
            <Comments key={comment.id} comment={comment} />
          ))}
          <Text style={styles.viewAllCommentsText}>{post.createdAt}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;
