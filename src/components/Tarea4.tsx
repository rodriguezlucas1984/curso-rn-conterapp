import {View, StyleSheet} from 'react-native';

export const Tarea4 = () => {
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
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    borderWidth: 10,
    borderColor: '#FFF',
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: '#FFF',
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    alignSelf:'flex-end',
    borderWidth: 10,
    borderColor: '#FFF',
    width: 100,
    height: 100,
    backgroundColor: '#28C4D9',
  },
});
