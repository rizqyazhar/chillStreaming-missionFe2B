import { createContext, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [addSelectedMovie, setAddSelectedMovie] = useState(null);
  const [movieLists, setMovieLists] = useState([]);
  const [openPopup, setPopup] = useState(false);
  const [message, setMessage] = useState(false);

  const handleOpenPopup = (movie) => {
    setSelectedMovie(movie);
    setAddSelectedMovie(movie);
    setPopup((prev) => !prev);
  };

  const handleClosePopup = () => {
    setPopup((prev) => !prev);
  };

  const handleAddBtn = () => {
    const movieId = movieLists.map((m) => m.id);
    console.log(movieId);
    // if (addSelectedMovie.id === movieId) {
    // }
    setMovieLists((prev) => [...prev, addSelectedMovie]);

    timer();
  };

  const timer = () => {
    setTimeout(() => {
      setMessage((prev) => !prev);
    }, 1000);
    setMessage((prev) => !prev);
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
        setMovieLists,
        message,
        timer,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListProvider };
