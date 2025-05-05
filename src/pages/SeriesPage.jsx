import HomeLayout from "../layouts/HomeLayout";
import Hero from "../fragments/Hero";
import Content from "../fragments/Content";
import PotraitCardBox from "../fragments/PotraitCardBox";
import LandscapeCardBox from "../fragments/LandscapeCardBox";
import Genre from "../fragments/genre/Genre";
import GenreTab from "../fragments/genre/GenreTab";

const SeriesPage = () => {
  return (
    <HomeLayout genreTab={<GenreTab width='100px' />}>
      <Hero>
        <Genre width='392px' />
      </Hero>
      <Content>
        <LandscapeCardBox title='Melanjutkan Tonton Series' />
        <PotraitCardBox title='Series Persembahan Chill' />
        <PotraitCardBox title='Top Rating Series Hari ini' />
        <PotraitCardBox title='Series Trending' />
        <PotraitCardBox title='Rilis Baru' />
      </Content>
    </HomeLayout>
  );
};

export default SeriesPage;
