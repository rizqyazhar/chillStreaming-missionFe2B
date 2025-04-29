import { useState } from "react";
import LandscapeCard from "../elements/LandscapeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopUp from "../fragments/Popup";

const LandscapeCardBox = ({ title, loading, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openPopup, setPopup] = useState(false);
  const handleOpenPopup = (movie) => {
    setSelectedMovie(movie);
    setPopup((prev) => !prev);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='relative w-11/12 mx-auto flex flex-col gap-5 md:gap-6 py-5 md:py-10'>
      <div className='w-full flex justify-start'>
        <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
          {title}
        </h3>
      </div>
      <div className='flex flex-col gap-3'>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <Slider {...settings}>
              {movies.map((movie) => (
                <LandscapeCard
                  key={movie.id}
                  src={movie.img[1]}
                  title={movie.title}
                  genre={movie.genre}
                  age={movie.age}
                  eps={movie.eps}
                  onClick={() => handleOpenPopup(movie)}
                />
              ))}
            </Slider>
          </>
        )}
        {selectedMovie && (
          <PopUp
            openPopup={openPopup}
            setPopup={setPopup}
            isSeries={true}
            key={selectedMovie.id}
            title={selectedMovie.title}
            genre={selectedMovie.genre}
            age={selectedMovie.age}
            eps={selectedMovie.episode}
          />
        )}
      </div>
    </div>
  );
};

export default LandscapeCardBox;
