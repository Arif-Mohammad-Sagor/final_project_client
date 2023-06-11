import React from 'react'
import Hero from '../../components/Hero'
import Instructors from '../../components/Instructors'
import PopularClass from '../../components/PopularClass';
import Pricing from '../../components/Pricing';


const Home = () => {
  return (
    <>
      <Hero></Hero>
      <PopularClass></PopularClass>
      <Instructors></Instructors>
     <Pricing></Pricing>
    </>
  );
}

export default Home