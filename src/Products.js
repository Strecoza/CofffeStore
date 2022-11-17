import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function Products({itemForSale}){
    return(
    <div className = 'products'>
        {itemForSale.map((element =>{
            const {id, image, itemName, price} = element;

            return(
                <div className="col-md-3" key={id}>
                    <div className="card" >
                        <img src={image} className="card-img-top" alt="Product"/>
                        <div className="card-body">
                            <h5 className="card-title">{itemName}</h5>
                            <p className="card-text">$ {price}</p>
                            <a href="Basket.js" className="btn btn-primary">Order</a>
                        </div>
                    </div>
                </div>

                )
            }))}
        </div>
    )
}
export default Products;

