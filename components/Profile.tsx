import React from 'react';
import CountryFlag from "react-native-country-flag";
import { StyleSheet, Text, View } from 'react-native';
import { UserProfile } from '../types';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = ({user}: {user: UserProfile}) => {
  const realName = `${user.name.first} ${user.name.last}`;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.name}>{realName}</Text>
      <FontAwesome5 size={30} name={user.gender === 'male' ? 'male' : 'female'}></FontAwesome5>
    </View>
  );
}

export const Profile = ({ user }: { user: UserProfile }) => {
  return (
    <View style={styles.container}>
      <Header user={user}></Header>
      <CountryFlag isoCode={user.nat} size={60}></CountryFlag>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    marginBottom: 10,
    marginRight: 10
  },
  text: {
    fontSize: 16
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});