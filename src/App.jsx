import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Results from "./pages/Results.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Admission from "./pages/Admission.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Why from "./pages/Why.jsx";
import Notes from "./pages/Notes.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/why" element={<Why />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}
