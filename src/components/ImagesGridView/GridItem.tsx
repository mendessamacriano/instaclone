import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import colors from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GridItem = ({post}: {post: IPost}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: post.image || post.images[0]}}
        style={styles.image}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    aspectRatio: 1,
    maxWidth: `${100 / 3}%`,
  },
  image: {
    flex: 1,
  },
});

export default GridItem;
