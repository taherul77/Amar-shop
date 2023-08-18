import SectionTitle from "./lib/components/app/AllPage/SectionTitle";
import Wrapper from "./lib/components/app/AllPage/Wrapper";
import Banner from "./lib/components/app/Page/Banner";
import Gallery from "./lib/components/app/Page/Gallery";



const Home = async () => {

  return (
    <div className="bg-white">
      <Banner></Banner>
      <SectionTitle  SubHeading={"MOST POPULAR"}
          heading={"PRODUCT"}></SectionTitle>
          <Wrapper>
            hi
          </Wrapper>
          <SectionTitle
          SubHeading={"OUR PRODUCT"}
          heading={"GALLERY"}
        ></SectionTitle>
         <Wrapper>
        <Gallery></Gallery>
        </Wrapper>
    </div>
  );
};

export default Home;
