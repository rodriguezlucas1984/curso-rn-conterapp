import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {fontSize: 45, textAlign: 'center'},
});
