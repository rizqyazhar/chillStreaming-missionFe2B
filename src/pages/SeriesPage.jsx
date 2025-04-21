import HomeLayout from "../layouts/HomeLayout";
import Hero from "../fragments/Hero";
import Content from "../fragments/Content";
import PotraitCardBox from "../fragments/PotraitCardBox";
import LandscapeCardBox from "../fragments/LandscapeCardBox";
import Genre from "../fragments/genre/Genre";
import GenreTab from "../fragments/genre/GenreTab";
import PopUp from "../fragments/Popup";
import { useState } from "react";

const SeriesPage = () => {
  const [openPopup, setPopup] = useState(false);
  return (
    <HomeLayout genreTab={<GenreTab width='100px' />}>
      <Hero>
        <Genre width='392px' />
      </Hero>
      <Content>
        <LandscapeCardBox
          title='Melanjutkan Tonton Series'
          setPopup={setPopup}
        />
        <PotraitCardBox title='Series Persembahan Chill' setPopup={setPopup} />
        <PotraitCardBox
          title='Top Rating Series Hari ini'
          setPopup={setPopup}
        />
        <PotraitCardBox title='Series Trending' setPopup={setPopup} />
        <PotraitCardBox title='Rilis Baru' setPopup={setPopup} />
        <PopUp openPopup={openPopup} setPopup={setPopup} />
      </Content>
    </HomeLayout>
  );
};

export default SeriesPage;
