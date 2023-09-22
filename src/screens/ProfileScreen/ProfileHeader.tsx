import {View, Text, SafeAreaView, Image, Alert, StyleSheet} from 'react-native';
import React from 'react';
import TouchableButton from '../../components/TouchableButton/TouchableButton';
import user from '../../assets/data/user.json';

const ProfileHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.statistics}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.text}>Posts</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.numberText}>2M</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.numberText}>120k</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
      <View style={styles.userDetails}>
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.userbio}>{user.bio}</Text>
      </View>
      <View style={styles.touchableButtons}>
        <TouchableButton
          title="Edit Profile"
          onPress={() => Alert.alert('edit profile')}
        />

        <TouchableButton
          title="Another Button"
          onPress={() => Alert.alert('another button')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },

  statistics: {
    alignItems: 'center',
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
  },
  numberText: {
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
  },
  userDetails: {
    marginVertical: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  userbio: {
    color: 'grey',
    paddingTop: 10,
  },
  touchableButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ProfileHeader;
