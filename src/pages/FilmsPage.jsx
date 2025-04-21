import HomeLayout from "../layouts/HomeLayout";
import Hero from "../fragments/Hero";
import Content from "../fragments/Content";
import PotraitCardBox from "../fragments/PotraitCardBox";
import LandscapeCardBox from "../fragments/LandscapeCardBox";
import Genre from "../fragments/genre/Genre";
import { useState } from "react";
import GenreTab from "../fragments/genre/GenreTab";
import PopUp from "../fragments/Popup";

const FilmsPage = () => {
  const [openPopup, setPopup] = useState(false);

  return (
    <HomeLayout genreTab={<GenreTab width='100px' />}>
      <Hero>
        <Genre width='392px' />
      </Hero>
      <Content>
        <LandscapeCardBox title='Melanjutkan Tonton Film' setPopup={setPopup} />
        <PotraitCardBox title='Film Persembahan Chill' setPopup={setPopup} />
        <PotraitCardBox title='Top Rating Film Hari ini' setPopup={setPopup} />
        <PotraitCardBox title='Film Trending' setPopup={setPopup} />
        <PotraitCardBox title='Rilis Baru' setPopup={setPopup} />
        <PopUp openPopup={openPopup} setPopup={setPopup} />
      </Content>
    </HomeLayout>
  );
};

export default FilmsPage;
