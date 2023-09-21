import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Comments from '../Comments';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import styles from './styles';
import {IPost} from '../../types/models';
import {useState} from 'react';
import DoublePressable from '../DoublePress/DoublePressable';
import Carousel from '../Carousel/Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleLikedButton = () => {
    setIsLiked(!isLiked);
  };

  // displaying image for single image or carrousel for more then 1 image
  let content = null;
  if (post.image) {
    content = (
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
    );
  } else if (post.images) {
    content = (
      <Carousel images={post.images} onDoublePress={toggleLikedButton} />
    );
  } else if (post.video) {
    content = <VideoPlayer uri={post.video} paused={!isVisible} />;
  }

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
      <DoublePressable onDoublePress={toggleLikedButton}>
        {content}
      </DoublePressable>
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLikedButton}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? 'red' : colors.black}
            />
          </Pressable>
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
          <Text
            style={styles.text}
            numberOfLines={isDescriptionExpanded ? 0 : 2}>
            <Text style={styles.boldLikedText}>{post.user.username}</Text>{' '}
            {post.description}
          </Text>
          <Text onPress={toggleDescriptionExpanded} style={{color: 'blue'}}>
            {isDescriptionExpanded ? 'less' : 'more'}
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
