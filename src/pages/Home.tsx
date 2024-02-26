
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';

export default function Route(){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}