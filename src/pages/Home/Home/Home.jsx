import React from 'react'
import Hero from '../../components/Hero'
import Instructors from '../../components/Instructors'
import PopularClass from '../../components/PopularClass';
import Review from '../../components/Review';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Instructors></Instructors>
      <PopularClass></PopularClass>
      <Review></Review>
    </>
  );
}

export default Home