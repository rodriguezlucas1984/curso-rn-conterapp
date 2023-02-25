import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranaja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '70%',
    // height: 400,
    backgroundColor: '#28c4d9',
  },
  cajaMorada: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderColor: '#FFFFFF',
    borderWidth: 10,
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
  },
  cajaNaranaja: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderColor: '#FFFFFF',
    borderWidth: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
  },
  cajaVerde: {
    // position: 'absolute',
    // top:0,
    // bottom: 0,
    // right:0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
    borderColor: '#FFFFFF',
    borderWidth: 10,
    //width: 100,
    //height: 100,
    backgroundColor: '#10FFA0',
  },
});
