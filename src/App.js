import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Curriculum from "./pages/Curriculum";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./layout/Layout.jsx";
import ScrollToTop from "./helpers/ScrollToTop.jsx";
import { useEffect } from "react";
import Aos from "aos";
import Career from "./pages/Career.jsx";

function App() {
  useEffect(() => {
    Aos.init()
  })
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="contact" element={<Contact />} />
            <Route path="career" element={<Career />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
