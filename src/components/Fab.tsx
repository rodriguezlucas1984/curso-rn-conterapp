import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  position?: 'bl' | 'br';
  onPress: () => void;
}

export const Fab = ({onPress, position = 'br', title}: Props) => {
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.rigth,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#3030B2', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}> {title} </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.rigth,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (Platform.OS === 'ios') {
    return ios();
  }
  return android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  rigth: {
    right: 25,
  },

  fab: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
