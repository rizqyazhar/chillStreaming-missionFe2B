import { createContext, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [addSelectedMovie, setAddSelectedMovie] = useState(null);
  const [movieLists, setMovieLists] = useState([]);
  const [openPopup, setPopup] = useState(false);
  const handleOpenPopup = (movie) => {
    setSelectedMovie(movie);
    setAddSelectedMovie(movie);
    setPopup((prev) => !prev);
  };

  const handleClosePopup = () => {
    setPopup((prev) => !prev);
  };

  const handleAddBtn = () => {
    setMovieLists((prev) => [...prev, addSelectedMovie]);
  };

  return (
    <ListContext.Provider
      value={{
        openPopup,
        setPopup,
        selectedMovie,
        handleOpenPopup,
        handleClosePopup,
        handleAddBtn,
        movieLists,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListProvider };
