import metaContent from '@/data/metaContent';
import { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        metaContent: metaContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
