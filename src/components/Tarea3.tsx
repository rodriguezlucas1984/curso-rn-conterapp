import {View, StyleSheet} from 'react-native';

export const Tarea3 = () => {
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
    justifyContent: 'center',
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    alignSelf: 'flex-end',
    borderWidth: 10,
    borderColor: '#FFF',
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    borderWidth: 10,
    borderColor: '#FFF',
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: '#FFF',
    width: 100,
    height: 100,
    backgroundColor: '#28C4D9',
  },
});
