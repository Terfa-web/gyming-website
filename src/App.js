import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/header/Header'
import Hero from './UI/Hero';
import Exercises from './UI/Exercises';
import Start from './UI/Start';
import Pricing from './UI/Pricing';
import Testimonials from './UI/Testimonials';
import Footer from './components/footer/Footer';

function App() {

  useEffect(() => {
    Aos.init()
  }, [ ])
  return (
    <>
    <Header />
    <Hero />
    <Exercises />
    <Start />
    <Pricing />
    <Testimonials />
    <Footer />
    </>
  );
}

export default App;
