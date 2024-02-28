import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../../types/models';
import user from '../../assets/data/user.json';

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';
// picking criterias to be editable
type IEditableUser = Pick<IUser, IEditableUserFields>;
interface ICustomInput {
  control: Control<IEditableUser, object>;
  name: IEditableUserFields;
  label: string;
  multiline?: boolean;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    render={({field: {onChange, value, onBlur}}) => (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={label}
          style={styles.input}
          multiline={multiline}
        />
      </View>
    )}
  />
);

const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm<IEditableUser>();

  const onSubmit = (data: IEditableUser) => {
    console.log('form submitted', data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />
      <Text style={styles.text}>Change profile photo</Text>

      <CustomInput label="Name" control={control} name="name" />
      <CustomInput label="Username" control={control} name="username" />
      <CustomInput label="Website" control={control} name="website" />
      <CustomInput label="Bio" multiline control={control} name="bio" />

      <Text onPress={handleSubmit(onSubmit)} style={styles.text}>
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
