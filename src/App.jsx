import React from 'react';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Showcase from './components/sections/Showcase';
import Work from './components/sections/Work';
import Blog from './components/sections/Blog';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Showcase />
        <Work />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
