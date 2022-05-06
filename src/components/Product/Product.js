import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name , price , quantity, description, supplier , image} = product;
    return (
        <div className="product-container">
            <div className=" product-image">
                <img className="img-fluid w-100" src={image} alt="" />
            </div>
           <div className="product-details">
           <p className="product-name"> {name}</p>
            <p className="product-price">Price: {price}</p>
            <p className="product-quantity">Quantity: {quantity} Kg</p>
            <p className="product-supplier">Supplier: {supplier}</p>
            <p className="product-description">{description.slice(0, 150)} ...</p>
             
           
           </div>
           
           <button className="update-btn w-75">Stock Update</button>
           

        </div>
    );
};

export default Product;