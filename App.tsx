import React, {useEffect} from 'react';
import Navigation from './components/Navigation';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';

function App(): JSX.Element {
  useEffect(() => {
    NativeDevSettings.setIsDebuggingRemotely(true);
  }, []);
  return <Navigation />;
}

export default App;
