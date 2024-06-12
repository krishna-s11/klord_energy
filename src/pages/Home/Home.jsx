import React from 'react'
import "./home.css";
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Nav/Navbar';
import QuickLinks from '../../components/QuickLinks/QuickLinks';
import KnowMore from '../../components/KnowMore/KnowMore';
import Gallery from '../../components/Gallery/Gallery';
import Procedures from '../../components/Procedures/Procedures';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Navbar />
        <Hero />
        <div className='home_quick'>
          <QuickLinks />
          <KnowMore />
        </div>
        <Gallery />
        <Procedures />
        <Footer />
        <div className='advertisement'>
            <p>Designed and Developed By <span style={{fontWeight: "600", marginLeft: "10px"}}>{`< WebMinutes.com />`}</span></p>
        </div>
    </div>
  )
}

export default Home