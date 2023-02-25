import {SafeAreaView, StyleSheet} from 'react-native';

import {TareaScreen} from './src/screens/TareaScreen';
//import {FlexScreen} from './src/screens/FlexScreen';
//import {DimensionesScreen} from './src/screens/DimensionesScreen';
//import {PositionScreen} from './src/screens/PositionScreen';
//import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
//import {ContadorScreen} from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HolaMundoScreen />*/}
      {/*<ContadorScreen inicio={5} /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
});
