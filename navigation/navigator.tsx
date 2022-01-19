import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { users } from '../dev/mock';

import { HomeScreen, ProfileScreen, FeedScreen } from '../screens/Screens';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: number };
  Feed: { sort: 'latest' | 'top' | 'talked' } | undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function Navigator() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(users[Math.floor(Math.random() * 100)]);
  }, [])

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Home' component={HomeScreen}></RootStack.Screen>
        <RootStack.Screen name='Profile' component={ProfileScreen}></RootStack.Screen>
        <RootStack.Screen name='Feed' component={FeedScreen}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}