import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

import GalleryPage from "./pages/GalleryPage";
import Swimming from "./pages/SwimmingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/swimming" element={<Swimming />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
