import React,{useState,useRef,useEffect} from 'react'

import NavBar from './components/navbar/NavBar'
import Carousel from './components/carousel/Carousel'
import AboutUs from './components/aboutus/AboutUs'
import Rides from './components/rides/Rides'
import PopularRides from './components/ridesCarousel/Rides'
import Footer from './components/footer/Footer'

import Images from './json/images.json'
import  './App.css'

const App = () => {

  const [currSlide,setCurrSlide]=useState(0)
  const length = Images.length
  const delay=5000
  const timeoutRef = useRef(null);

  const resetTimeOut=()=>{
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
  }

  const handleNextslide=()=>{
    setCurrSlide(currSlide===length-1 ? 0 : currSlide+1)
  }
  const handlePrevslide=()=>{
    setCurrSlide(currSlide===0 ? length-1 : currSlide-1)
  }

  useEffect(()=>{
    resetTimeOut();
    timeoutRef.current = setTimeout(() =>
        setCurrSlide((prevIndex) =>
          prevIndex === Images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
        resetTimeOut();
    };
  },[currSlide])

  return (
    <div id="Home">
        <NavBar leftClick={handlePrevslide} rightClick={handleNextslide}/>
        <Carousel currSlide={currSlide} Images={Images}/>
        <AboutUs/>
        <Rides/>
        <PopularRides/>
        <Footer/>
    </div>
  )
}

export default App
