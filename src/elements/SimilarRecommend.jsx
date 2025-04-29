import { useState, useEffect } from "react";
import PotraitCard from "./PotraitCard";

const SimilarRecommend = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movieList");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  });
  return (
    <div className='w-full bg-pageHeaderBackground text-light-primary px-5 py-2.5 md:px-16 md:py-6 flex flex-col gap-2 md:gap-7'>
      <h6 className='md:font-bold text-sm md:text-2xl'>Rekomendasi Serupa</h6>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='w-full grid grid-cols-3 justify-center'>
          {[...movies].slice(0, 3).map((movie) => (
            <PotraitCard key={movie.id} src={movie.img[0]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SimilarRecommend;
