import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

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
