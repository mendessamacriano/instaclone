import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const MessageInputBox = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => {
    console.warn(newComment);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={newtext => setNewComment(newtext)}
        placeholder="write your comment..."
        multiline
        style={styles.textInput}
      />
      <Pressable style={styles.pressable} onPress={onPost}>
        <Text style={styles.pressableText}>Post</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'whitesmoke',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 35,
    aspectRatio: 1,
    borderRadius: 20,
  },
  textInput: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    borderRadius: 25,
  },

  pressable: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },

  pressableText: {
    color: 'blue',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MessageInputBox;
