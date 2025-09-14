import React from 'react';
import Services from '../src/komponen/Service';
import Mentors from '../src/komponen/Mentors';
import ExpertInstructor from '../src/komponen/ExperienceMentor';
import OfficeLocations from '../src/komponen/OfficeLocation';
import Footer from '../src/komponen/Footer';
import Biaya from '../src/komponen/Biaya';
import TestimoniVideo from '../src/komponen/TestimoniText';
import TestimoniText from '../src/komponen/TestimoniVideo';
import Client from '../src/komponen/Client';
import Home from '../src/komponen/Home';
import Navbar from '../src/komponen/Navbar';
import About from '../src/komponen/About';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Mentors />
        <ExpertInstructor/>
        <OfficeLocations />
        <Client/>
        <Biaya />
        <TestimoniText/>
        <TestimoniVideo/>
      </main>
      <Footer />
    </>
  );
}

export default App;