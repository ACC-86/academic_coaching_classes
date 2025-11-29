import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav>
      <Link to="/" style={{color:'white'}}>Home</Link>
      <Link to="/about" style={{color:'white'}}>About</Link>
      <Link to="/courses" style={{color:'white'}}>Courses</Link>
      <Link to="/results" style={{color:'white'}}>Toppers</Link>
      <Link to="/gallery" style={{color:'white'}}>Gallery</Link>
      <Link to="/contact" style={{color:'white'}}>Contact</Link>
      <Link to="/admission" style={{color:'white'}}>Admission</Link>
      <Link to="/testimonials" style={{color:'white'}}>Testimonials</Link>
      <Link to="/why" style={{color:'white'}}>Why Us</Link>
      <Link to="/notes" style={{color:'white'}}>Notes</Link>
    </nav>
  );
}
