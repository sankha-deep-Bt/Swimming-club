import "./App.css";
import AboutUs from "./components/AboutUs";
import Equipments from "./components/Equipments";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Facilities />
      <Equipments />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
