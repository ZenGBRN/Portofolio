
'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Certificates from '../components/Testimonials';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
