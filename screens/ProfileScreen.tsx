import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../navigation/navigator'
import { useGlobalUserContext } from '../context/UserContext';
import { Profile } from '../components/Profile';

type NavProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export function ProfileScreen({ navigation }: NavProps) {
  const { user } = useGlobalUserContext();

  return (
    <View style={styles.container}>
      {user && <Profile user={user} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
  },
  text: {
    marginBottom: 15,
    fontSize: 24
  }
})