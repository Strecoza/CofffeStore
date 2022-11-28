import React,{useState}  from 'react';

import './App.css';

import {data} from './Data';
import Products from './Products';
import Buttons from './Buttons';
import ButtonAll from './ButtonAll';


function Shop() {
  const [products, setProducts]= useState(data);
  const allProducts =()=> setProducts(data)

  const chosenProducts = (searchTerm) =>{
    const newProducts = data.filter(element => element.searchTerm === searchTerm);
    setProducts (newProducts);
  }

  return (
    <div>
      <section className='section'>
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

    </div>
  );
}

export default Shop;
