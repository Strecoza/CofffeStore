import React from 'react';
import './App.css';

function Buttons({filteredProducts}){
    return(
        <div className='filter_buttons'>
            <div>
                <button className="filter" onClick = {() => filteredProducts("coffee")}>Coffee beans</button>
            </div>
            <div>
                <button className="filter" onClick = {() => filteredProducts("cocoa")}>Cacao beans</button>
            </div>
            <div>
                <button className="filter" onClick = {() => filteredProducts("dessert")}>Desserts</button>
            </div>
            <div>
                <button className="filter" onClick = {() => filteredProducts("food")}>Food</button> 
            </div> 
            <div>
                <button className="filter" onClick = {() => filteredProducts("drink")}>Drinks</button>
            </div>
        </div>
    )
}
export default Buttons;

