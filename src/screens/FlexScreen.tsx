import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contenedorHijo1}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
      </View>
      <View style={styles.contenedorHijo2}>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
        <Text style={styles.caja4}>Caja 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenedorHijo1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 400,
    backgroundColor: '#28C4D9',
  },
  contenedorHijo2: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 400,
    paddingTop:40,
    backgroundColor: '#C428D9',
  },
  caja1: {
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#3F756C',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
  caja2: {
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#756CFF',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
  caja3: {
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#753F6C',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
  caja4: {
    borderWidth: 2,
    borderColor: '#FFF',
    marginTop:15,
    width: '30%',
    backgroundColor: 'orange',
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
  },
});
