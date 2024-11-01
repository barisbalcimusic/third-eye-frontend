import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [audioURL, setAudioURL] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isCaptured, setIsCaptured] = useState(false);

  return (
    <DataContext.Provider
      value={{
        audioURL,
        setAudioURL,
        isWaiting,
        setIsWaiting,
        isCaptured,
        setIsCaptured,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
