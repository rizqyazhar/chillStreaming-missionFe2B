import { Outlet } from "react-router-dom";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

const HomeLayout = ({ genreTab }) => {
  return (
    <>
      <Navbar genreTab={genreTab} />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
