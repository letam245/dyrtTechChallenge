import React, {useEffect} from 'react';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import Navigation from './src/components/navigation';

const App = () => {
  useEffect(() => {
    NativeDevSettings.setIsDebuggingRemotely(true);
  }, []);
  return <Navigation />;
};

export default App;
