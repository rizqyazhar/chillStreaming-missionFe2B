import { Outlet } from "react-router-dom";
import { ListProvider } from "../state/ContextState";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

const HomeLayout = ({ genreTab }) => {
  return (
    <ListProvider>
      <Navbar genreTab={genreTab} />
      <Outlet />
      <Footer />
    </ListProvider>
  );
};

export default HomeLayout;
