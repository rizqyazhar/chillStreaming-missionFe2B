import HomeLayout from "../layouts/HomeLayout";
import Hero from "../molecules/Hero";
import Content from "../molecules/Content";

const HomePage = () => {
  return (
    <HomeLayout>
      <Hero />
      <Content>
        <LandscapeBoxs title='Melanjutkan Tonton Film' />
        <PotraitBoxs title='Top Rating Film dan Series Hari ini' />
        <PotraitBoxs title='Film Trending' />
        <PotraitBoxs title='Rilis Baru' />
      </Content>
    </HomeLayout>
  );
};

export default HomePage;
