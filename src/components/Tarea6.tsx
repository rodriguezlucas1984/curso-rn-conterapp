import {View, StyleSheet} from 'react-native';

export const Tarea6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    flex: 1,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    flex: 1,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    flex: 2,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#28C4D9',
  },
});
