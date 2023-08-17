import SectionTitle from "./lib/components/app/AllPage/SectionTitle";
import Wrapper from "./lib/components/app/AllPage/Wrapper";
import Banner from "./lib/components/app/Page/Banner";



const Home = async () => {

  return (
    <div className="bg-white">
      <Banner></Banner>
      <SectionTitle  SubHeading={"MOST POPULAR"}
          heading={"PRODUCT"}></SectionTitle>
          <Wrapper>
            hi
          </Wrapper>
    </div>
  );
};

export default Home;
