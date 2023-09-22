import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentsProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comments = ({comment, includeDetails = false}: ICommentsProps) => {
  const [isLiked, setIsLiked] = useState();

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comments}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.image} />
      )}
      <View style={{flex: 1}}>
        <Text style={styles.commentsText}>
          <Text style={styles.boldLikedText}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.commentFooter}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={4}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? 'red' : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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

  image: {
    width: 35,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  commentFooter: {
    flexDirection: 'row',
  },
  footerText: {
    marginHorizontal: 5,
    color: colors.grey,
  },
});

export default Comments;
