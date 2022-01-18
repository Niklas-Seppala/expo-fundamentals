import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/navigator'

type NavProps = NativeStackScreenProps<RootStackParamList, 'Feed'>;

export function FeedScreen({ navigation }: NavProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed Screen</Text>
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
  }
})
