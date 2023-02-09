import { createContext, useContext, useState } from "react";

const NewTabContext = createContext();

export const NewTabProvider = ({ children }) => {
  const [tabData, setTabData] = useState([]);

  const values = { tabData, setTabData };

  return (
    <NewTabContext.Provider value={values}>{children}</NewTabContext.Provider>
  );
};

export const useNewTab = () => useContext(NewTabContext);
