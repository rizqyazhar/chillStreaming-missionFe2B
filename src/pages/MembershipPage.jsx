import Content from "../fragments/Content";
import HeroContent from "../fragments/membership/HeroContent";
import PackagesMembership from "../fragments/membership/PackagesMembership";
import HomeLayout from "../layouts/HomeLayout";

const MembershipPage = () => {
  return (
    <HomeLayout>
      <Content>
        <HeroContent />
        <PackagesMembership />
      </Content>
    </HomeLayout>
  );
};

export default MembershipPage;
