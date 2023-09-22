import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

import comments from '../../assets/data/comments.json';
import Comments from '../../components/Comments';
import MessageInputBox from './MessageInputBox';

const CommentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comments comment={item} />}
        style={styles.flatlist}
      />
      <MessageInputBox />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    padding: 10,
  },
});

export default CommentsScreen;
