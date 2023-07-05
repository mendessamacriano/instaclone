import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentsProps {
  comment: IComment;
}

const Comments = ({comment}: ICommentsProps) => {
  return (
    <View style={styles.comments}>
      <Text style={styles.commentsText}>
        <Text style={styles.boldLikedText}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
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
});

export default Comments;
