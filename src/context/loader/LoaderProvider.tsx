import React from 'react';
import { useState } from 'react';
import { LoaderContext } from './LoaderContext';

interface Props {
  children: React.ReactNode;
}

export const LoaderProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
