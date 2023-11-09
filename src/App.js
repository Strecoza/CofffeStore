import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {FaShoppingBasket} from 'react-icons/fa';
import {CiCoffeeBean} from 'react-icons/ci';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Home';
import Catering from './Catering';
import BeansValues from './BeansValues';
import About from './About';
import Review from './Review';
import Basket from './Basket';
import Shop from './Shop';
import Footer from "./Footer";

function App() {
 return(
  <header>
    <Router>
        <nav>
          <Link className='link logo' to = '/' ><CiCoffeeBean/>Co.Beans</Link>
          <div className='links'>
            <Link className='link' to = '/shop'>Shop</Link>
            <Link className='link' to = '/catering'>Add new</Link>
            <Link className='link' to = '/about'>About</Link>
            <Link className='link' to = '/beansvalues'>Beans values</Link>
            <Link className='link' to = '/review'>Review</Link>
            <Link className='link' to = '/basket'><FaShoppingBasket className='basket'/></Link>
          </div>
        </nav>
    
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/shop' element = {<Shop/>}/>
        <Route path = '/catering' element = {<Catering/>}/>
        <Route path = '/review' element = {<Review/>} />
        <Route path ='/about' element = {<About/>}/>
        <Route path = '/beansvalues' element ={<BeansValues/>} />
        <Route path = '/basket' element ={<Basket/>} />
      </Routes>
    </Router>
    <Footer/>
  </header>
 );
}

export default App;
