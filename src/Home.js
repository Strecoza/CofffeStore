import React,{useState}  from 'react';

import {data} from './Data';
import Products from './Products';
import Buttons from './Buttons';
import ButtonAll from './ButtonAll';

import './App.css';

function Home() {
  const [products, setProducts]= useState(data);
  const allProducts =()=> setProducts(data)

  const chosenProducts = (searchTerm) =>{
    const newProducts = data.filter(element => element.searchTerm === searchTerm);
    setProducts (newProducts);
  }

  return (
    <section className='section'>
      <div className='banner'>
        <img className='banner-image' src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt='Coffee time'/>
          <h3 className='banner-text'>Take your time. <br/> <br/>Enjoy!</h3>
      </div>
      <div>
        <h2 className = 'title'> Free Standart Shipping</h2>
      </div>
      <div className='cont'>
        <div >
          <Buttons filteredProducts = {chosenProducts}/>
        </div>
        <div>
          <ButtonAll allData= {allProducts}/>
        </div> 
      </div>

        <Products itemForSale= {products}/>
     
    </section>
  );
}

export default Home;
