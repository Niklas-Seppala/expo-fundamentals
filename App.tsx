import { Navigator } from './navigation/navigator';
import { UserContextProvider } from './context/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <Navigator />
    </UserContextProvider>
  );
}