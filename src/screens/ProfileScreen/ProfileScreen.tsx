import {StyleSheet} from 'react-native';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import GridView from '../../components/ImagesGridView/GridView';
import user from '../../assets/data/user.json';
const ProfileScreen = () => {
  return <GridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
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

export default ProfileScreen;
