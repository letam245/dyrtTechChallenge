import React from 'react';
import Navigation from './src/components/navigation';
import GlobalLoader from './src/components/ui/GlobalLoader';
import { LoaderProvider } from 'context/loader/LoaderProvider';

const App: React.FC = () => {
  return (
    <LoaderProvider>
      <Navigation />
      <GlobalLoader />
    </LoaderProvider>
  );
};

export default App;
