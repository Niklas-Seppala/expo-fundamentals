import React, { PropsWithChildren, useContext, useState } from 'react';
import { GlobalUserProfile, UserProfile } from '../types';

export const UserContext = React.createContext<GlobalUserProfile>({} as GlobalUserProfile);

export const useGlobalUserContext = () => useContext(UserContext)

export function UserContextProvider(props: PropsWithChildren<{}>) {
  const [user, setUser] = useState<UserProfile | undefined>(undefined);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
}