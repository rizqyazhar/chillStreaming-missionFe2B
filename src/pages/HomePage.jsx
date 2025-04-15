import HomeLayout from "../layouts/HomeLayout";
import Hero from "../molecules/Hero";
import Content from "../molecules/Content";
import PotraitCardBox from "../molecules/PotraitCardBox";
import LandscapeCardBox from "../molecules/LandscapeCardBox";

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
