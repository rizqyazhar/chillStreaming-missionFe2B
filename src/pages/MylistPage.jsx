import Mylist from "../fragments/Mylist";
import HomeLayout from "../layouts/HomeLayout";

const MylistPage = ({ listingAdd }) => {
  return (
    <HomeLayout>
      <Mylist listingAdd={listingAdd} />
    </HomeLayout>
  );
};

export default MylistPage;
