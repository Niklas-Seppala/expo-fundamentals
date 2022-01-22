export type UserProfile = {
  gender: 'male' | 'female',
  name: {
    title: string,
    first: string,
    last: string
  },
  email: string,
  login: {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  nat: string
}

export type GlobalUserProfile = {
  user: UserProfile | undefined,
  setUser: React.Dispatch<React.SetStateAction<UserProfile | undefined>>
}

export type ProfileProps = {
  user: UserProfile,
  style?: StyleProp<ViewStyle>
}

export type Gender = 'male' | 'female'