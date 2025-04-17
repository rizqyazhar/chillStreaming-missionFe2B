import Content from "../fragments/Content";
import HeroContent from "../fragments/membership/HeroContent";
import HomeLayout from "../layouts/HomeLayout";

const MembershipPage = () => {
  return (
    <HomeLayout>
      <Content>
        <HeroContent />
      </Content>
    </HomeLayout>
  );
};

export default MembershipPage;
