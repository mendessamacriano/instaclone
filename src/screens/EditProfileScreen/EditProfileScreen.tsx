import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import user from '../../assets/data/user.json';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline = false}: ICustomInput) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput placeholder={label} style={styles.input} multiline={multiline} />
  </View>
);

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.log('form submitted');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />
      <Text style={styles.text}>Change profile photo</Text>

      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.text}>
        Submit
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },

  image: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },

  text: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '600',
  },

  inputContainer: {flexDirection: 'row', width: '100%', margin: 10},
  label: {width: 100, paddingLeft: 10},
  input: {flex: 1},
});

export default EditProfileScreen;
