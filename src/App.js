import React from "react";
import "./App.css";
import "./index.css";

import {
  Home,
  Services,
  Brands,
  Navbar,
  About,
  CaseStudy,
  WorkProcess,
  Team,
  Testimonials,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Brands />
      <Services />
      <About />
      <CaseStudy />
      <WorkProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
