import {View, StyleSheet, Text} from 'react-native';
import {useState} from 'react';

import {Fab} from '../components/Fab';
import {Tarea1} from '../components/Tarea1';
import {Tarea2} from '../components/Tarea2';
import {Tarea3} from '../components/Tarea3';
import {Tarea4} from '../components/Tarea4';
import {Tarea5} from '../components/Tarea5';
import {Tarea6} from '../components/Tarea6';
import {Tarea7} from '../components/Tarea7';
import {Tarea8} from '../components/Tarea8';
import {Tarea9} from '../components/Tarea9';
import {Tarea10} from '../components/Tarea10';

export const TareaScreen = () => {
  const [tarea, setTarea] = useState(1);

  return (
    <View style={styles.container}>
      {tarea === 1 && <Tarea1 />}
      {tarea === 2 && <Tarea2 />}
      {tarea === 3 && <Tarea3 />}
      {tarea === 4 && <Tarea4 />}
      {tarea === 5 && <Tarea5 />}
      {tarea === 6 && <Tarea6 />}
      {tarea === 7 && <Tarea7 />}
      {tarea === 8 && <Tarea8 />}
      {tarea === 9 && <Tarea9 />}
      {tarea === 10 && <Tarea10 />}
      <View style={styles.containerSeleccion}>
        <Fab
          onPress={() => setTarea(tarea <= 9 ? tarea + 1 : 1)}
          position="br"
          title="+1"
        />
        <Text style={styles.text}>Tarea {tarea}</Text>
        <Fab
          onPress={() => setTarea(tarea > 1 ? tarea - 1 : 10)}
          position="bl"
          title="-1"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerSeleccion: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  text: {
    fontSize: 40,
    color: '#FFF',
  },
});
