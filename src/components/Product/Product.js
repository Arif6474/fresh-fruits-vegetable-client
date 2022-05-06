import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {_id, name , price , quantity, description, supplier , image} = product;
    const navigate = useNavigate()
   const  navigateToFruitDetails = id => {
       navigate(`/fruits/${id}`)
   }
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
           
           <button onClick={() => navigateToFruitDetails(_id)} className="update-btn w-75">Stock Update</button>
           

        </div>
    );
};

export default Product;