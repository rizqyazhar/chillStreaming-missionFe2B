import { createContext } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  return <ListContext.Provider>{children}</ListContext.Provider>;
};

export { ListContext, ListProvider };
