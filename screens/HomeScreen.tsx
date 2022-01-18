import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/navigator'
import { CustomButton } from '../components/Button';

type NavProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: NavProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.navRow}>
        <CustomButton title='Profile' onPress={() => navigation.navigate('Profile', { userId: 1 })} />
        <CustomButton title='Feed' onPress={() => navigation.navigate('Feed', { sort: 'latest' })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginBottom: 15,
    fontSize: 24
  },
  button: {
    backgroundColor: '#4d73e8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  navRow: {
    flexDirection: 'row',
    marginVertical: 10
  }
})
