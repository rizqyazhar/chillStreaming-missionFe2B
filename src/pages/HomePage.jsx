import HomeLayout from "../layouts/HomeLayout";
import Hero from "../fragments/Hero";
import Content from "../fragments/Content";
import PotraitCardBox from "../fragments/PotraitCardBox";
import LandscapeCardBox from "../fragments/LandscapeCardBox";

const HomePage = ({ setListingAdd }) => {
  return (
    <HomeLayout>
      <Hero />
      <Content>
        <LandscapeCardBox
          title='Melanjutkan Tonton Film'
          setListingAdd={setListingAdd}
        />
        <PotraitCardBox
          title='Top Rating Film dan Series Hari ini'
          setListingAdd={setListingAdd}
        />
        <PotraitCardBox title='Film Trending' setListingAdd={setListingAdd} />
        <PotraitCardBox title='Rilis Baru' setListingAdd={setListingAdd} />
      </Content>
    </HomeLayout>
  );
};

export default HomePage;
