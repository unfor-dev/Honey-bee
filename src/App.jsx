import { useState, useCallback } from "react";
import "./css/App.css";
import Loader from "./components/Loader.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Products from "./components/Products.jsx";
import Shop from "./components/Shop.jsx";
import Gallery from "./components/Gallery.jsx";
import MeetUs from "./components/MeetUs.jsx";
import Footer from "./components/Footer.jsx";
import BeeModel1 from "./components/BeeModel1.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onFinish={handleLoaderFinish} />}
      <NavBar />
      <AboutUs />
      <Products />
      <Shop />
      <Gallery />
      <MeetUs />
      <Footer />
      <BeeModel1 />
    </>
  );
}

export default App;
