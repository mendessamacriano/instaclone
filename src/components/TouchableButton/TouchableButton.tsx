import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface ITouchaleButton {
  onPress: () => void;
  title: string;
}

const TouchableButton = ({onPress, title}: ITouchaleButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
});

export default TouchableButton;
