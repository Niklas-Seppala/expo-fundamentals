import React from 'react';
import CountryFlag from "react-native-country-flag";
import { StyleSheet, Text, View, Image, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Gender, ProfileProps, UserProfile } from '../types';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../constant/Colors';


const GenderIcon = ({ gender, size }: { gender: Gender, size: number }) => {
  return <FontAwesome5 size={size} color={'#555'} name={gender} />
};

const Header = ({ user, style }: { user: UserProfile, style?: StyleProp<ViewStyle> }) => {
  return (
    <View style={style}>
      <Text style={styles.username}>{user.login.username}</Text>
      <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
      <View style={styles.row}>
        <CountryFlag style={styles.flag} size={20} isoCode={user.nat} />
        <GenderIcon gender={user.gender} size={20}/>
      </View>
    </View>
  );
}

export const Profile = ({ user, style }: ProfileProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <Image source={{ uri: user.picture.large }} style={styles.profileImage}></Image>
        <View>
          <Header user={user}></Header>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.follow}>
            <Text>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5
  },
  text: {
    fontSize: 16
  },
  username: {
    fontSize: 26,
  },
  profileImage: {
    marginRight: 15,
    height: 100,
    width: 100,
    borderRadius: 75,
    borderColor: '#555',
    borderWidth: 1,
  },
  flag: {
    marginRight: 10
  },
  buttons: {
    flex: 1,
    flexDirection: 'column'
  },
  follow: {
    backgroundColor: Colors.main,
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 3
  }
});