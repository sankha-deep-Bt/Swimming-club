import AboutUs from "../components/home/AboutUs";
import Equipments from "../components/home/Equipments";
import Facilities from "../components/home/Facilities";
import Gallery from "../components/home/Gallery";
import Header from "../components/home/Header";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Equipments />
      <Facilities />
      <Gallery />
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
