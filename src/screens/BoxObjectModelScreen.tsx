import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModelScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
  title: {
    borderWidth: 5,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
