import HomeLayout from "../layouts/HomeLayout";
import Hero from "../fragments/Hero";
import Content from "../fragments/Content";
import PotraitCardBox from "../fragments/PotraitCardBox";
import LandscapeCardBox from "../fragments/LandscapeCardBox";
import Genre from "../fragments/genre/Genre";
import GenreTab from "../fragments/genre/GenreTab";

const FilmsPage = () => {
  return (
    <HomeLayout genreTab={<GenreTab width='100px' />}>
      <Hero>
        <Genre width='392px' />
      </Hero>
      <Content>
        <LandscapeCardBox title='Melanjutkan Tonton Film' />
        <PotraitCardBox title='Film Persembahan Chill' />
        <PotraitCardBox title='Top Rating Film Hari ini' />
        <PotraitCardBox title='Film Trending' />
        <PotraitCardBox title='Rilis Baru' />
      </Content>
    </HomeLayout>
  );
};

export default FilmsPage;
