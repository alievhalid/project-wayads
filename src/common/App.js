import Header from "../components/header/Header";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Contents from "./Contents";
import Profile from "../components/profile/Profile";
import Footer from "../components/footer/Footer";
import Card from "../components/cards/Card";
import Auth from "../components/authorization/Auth";
import Favorite from "../components/favorite/Favorite";
import SpecialistProfile from "../components/specialists/specialisProfile/SpecialistProfile";
import Specialists from "../components/specialists/Specialists";
import About from "../components/about/About";
// import { FaTelegramPlane } from "react-icons/fa";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/specialists/executor" element={<SpecialistProfile />} />
        <Route path={"/card/:id"} element={<Card />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <div className="bottom-right">
        <div className="tg">
          <FaTelegramPlane />
        </div>
        <div>
          <a
            href="https://t.me/+UiwD8uSTwNRjNGYy"
            rel="noreferrer"
            target="_blank"
          >
            Мы в Телеграмм
          </a>
        </div>
      </div> */}
      <div
        className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        &#8593;
      </div>
      <Footer />
    </div>
  );
}

export default App;
