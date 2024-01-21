import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
{/*       <BrowserRouter>
        <Routes>
          <Route element={<Hero />} index></Route>
          <Route element={<About />} path="about"></Route>
          <Route element={<Projects />} path="projects"></Route>
          <Route element={<Contact />} path="contact"></Route>
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
