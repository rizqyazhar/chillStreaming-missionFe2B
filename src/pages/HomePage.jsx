import HomeLayout from "../layouts/HomeLayout";
import Hero from "../fragments/Hero";
import Content from "../fragments/Content";
import PotraitCardBox from "../fragments/PotraitCardBox";
import LandscapeCardBox from "../fragments/LandscapeCardBox";

const HomePage = () => {
  return (
    <HomeLayout>
      <Hero />
      <Content>
        <LandscapeCardBox title='Melanjutkan Tonton Film' />
        <PotraitCardBox title='Top Rating Film dan Series Hari ini' />
        <PotraitCardBox title='Film Trending' />
        <PotraitCardBox title='Rilis Baru' />
      </Content>
    </HomeLayout>
  );
};

export default HomePage;
