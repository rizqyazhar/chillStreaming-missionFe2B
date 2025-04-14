import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const HomeLayout = ({ children, genreTab }) => {
  return (
    <>
      <Navbar genreTab={genreTab} />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
