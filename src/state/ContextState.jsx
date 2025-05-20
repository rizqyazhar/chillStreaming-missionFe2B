import { createContext, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openPopup, setPopup] = useState(false);
  const handleOpenPopup = (movie) => {
    setSelectedMovie(movie);
    setPopup((prev) => !prev);
  };

  const handleClosePopup = () => {
    setPopup((prev) => !prev);
  };

  return (
    <ListContext.Provider
      value={{
        openPopup,
        setPopup,
        selectedMovie,
        handleOpenPopup,
        handleClosePopup,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListProvider };
