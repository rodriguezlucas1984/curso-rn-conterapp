import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

interface Props {
  inicio?: number;
}

export const ContadorScreen = ({inicio = 0}: Props) => {
  const [contador, setContador] = useState(inicio);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador:{contador}</Text>

      <Fab onPress={() => setContador(contador + 1)} position="br" title="+1" />

      <Fab onPress={() => setContador(contador - 1)} position="bl" title="-1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    position: 'relative',
    top: -15,
    fontSize: 40,
    textAlign: 'center',
  },
});
