import React from 'react';
import Navigation from './src/components/navigation';
import {LoaderProvider} from './src/hooks/LoaderContext';
import GlobalLoader from './src/components/ui/GlobalLoader';

const App: React.FC = () => {
  return (
    <LoaderProvider>
      <Navigation />
      <GlobalLoader />
    </LoaderProvider>
  );
};

export default App;
