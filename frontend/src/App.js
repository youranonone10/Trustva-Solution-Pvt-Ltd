import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { BookingCalendar } from "./components/Calendar";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="calendar">
          <BookingCalendar />
        </section>
        
        <section id="blog">
          <Blog />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;