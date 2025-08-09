import React, { createContext, useEffect, useState } from "react";

interface DataContextType {
  data: number;
  setData: (data: number) => void;
}

export const DataContext = createContext<DataContextType>(null!);

export const DataProvider = ({ children }: React.PropsWithChildren<object>) => {
  const [data, setData] = useState(0);

  useEffect(() => {
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
