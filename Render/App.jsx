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


function App() {
  return (
    <>
      {/* Jika ada Navbar, letakkan di sini */}
      <main>
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