import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FruitDetails.css'

const FruitDetails = () => {
    const {fruitId} = useParams();
    const [fruit , setFruit] = useState({})
    // const [_id, name, price , quantity, supplier, description, image] = fruit;

    useEffect(() => {
        const url = `http://localhost:5000/fruit/${fruitId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFruit(data))
    }, [])
    return (
        <div className="product-detail">
        <div className=" product-image">
            <img className="img-fluid w-100" src={fruit?.image} alt="" />
        </div>
       <div className="product-details">
       <p className="product-name"> {fruit?.name}</p>
        <p className="product-price">Price: {fruit?.price}</p>
        <p className="product-quantity">Quantity: {fruit?.quantity} Kg</p>
        <p className="product-supplier">Supplier: {fruit?.supplier}</p>
        <p className="product-description">{fruit?.description}</p>
         
       
       </div>
       
       <button  className="update-btn w-75">Delivered</button>
       

    </div>
    );
};

export default FruitDetails;