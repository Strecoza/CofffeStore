import React,{useState}  from 'react';

import './App.css';


import Shop from './Shop';
import About from './About';
import BeansValues from './BeansValues';
import Review from './Review';

function Home() {
  return (
    <div>
      <section className='section'>
        <div className='banner'>
          <img className='banner-image' src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt='Coffee time'/>
            <h3 className='banner-text'>Take your time. <br/> <br/>Enjoy!</h3>
        </div>
      </section>
      <section className='section'>
          <Shop/>
      </section>
      <section className='section'>
        <About/>
      </section>
      <section className='section'>
        <BeansValues/>
      </section>
      <section className='section'>
        <Review/>
      </section>
    </div>
  );
}

export default Home;
