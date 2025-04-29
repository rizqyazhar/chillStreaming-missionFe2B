import { useState, useEffect } from "react";
import HomeLayout from "../layouts/HomeLayout";
import Hero from "../fragments/Hero";
import Content from "../fragments/Content";
import PotraitCardBox from "../fragments/PotraitCardBox";
import LandscapeCardBox from "../fragments/LandscapeCardBox";
import Genre from "../fragments/genre/Genre";
import GenreTab from "../fragments/genre/GenreTab";

const SeriesPage = () => {
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
    <HomeLayout genreTab={<GenreTab width='100px' />}>
      <Hero>
        <Genre width='392px' />
      </Hero>
      <Content>
        <LandscapeCardBox
          title='Melanjutkan Tonton Series'
          movies={movies}
          loading={loading}
        />
        <PotraitCardBox
          title='Series Persembahan Chill'
          movies={movies}
          loading={loading}
        />
        <PotraitCardBox
          title='Top Rating Series Hari ini'
          movies={movies}
          loading={loading}
        />
        <PotraitCardBox
          title='Series Trending'
          movies={movies}
          loading={loading}
        />
        <PotraitCardBox title='Rilis Baru' movies={movies} loading={loading} />
      </Content>
    </HomeLayout>
  );
};

export default SeriesPage;
