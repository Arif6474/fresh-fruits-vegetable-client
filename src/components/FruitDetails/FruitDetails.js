import React, { useEffect,  useState } from 'react';

import { useParams } from 'react-router-dom';
import './FruitDetails.css'

const FruitDetails = () => {
    const {fruitId} = useParams();
    const [fruit , setFruit] = useState({});
    const {name , image, description, quantity , supplier, price } = fruit;
    
   let oldQuantity = parseInt(fruit?.quantity)


useEffect(() => {
    const url = `http://localhost:5000/fruit/${fruitId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setFruit(data))
}, [fruitId, fruit])
 
 // decrease quantity

 const handleDeliveredQuantity = () => {
      const newQuantity = oldQuantity - 1;  
      const dQuantity = {newQuantity}
      const url = `http://localhost:5000/fruit/${fruitId}`
      fetch(url ,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dQuantity)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
      
       
       
    })

}


  const handleQuantity = (event) => {
    event.preventDefault();
    const addQuantity = parseInt(event.target.quantity.value);
    const newQuantity = parseInt(oldQuantity + addQuantity);
    const fruitQuantity = {newQuantity}
    console.log(fruitQuantity);

     // update quantity
     const url = `http://localhost:5000/fruit/${fruitId}`
    fetch(url,{
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(fruitQuantity)
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
    //   setQuantity(data)
      alert('Do you want to update quantity?')
      event.target.reset();
  })
  }
    return (
        <div className="product-detail">
        <div className=" product-image">
            <img className="img-fluid w-100" src={image} alt="" />
        </div>
       <div className="product-details">
       <p className="product-name"> {name}</p>
        <p className="product-price">Price: {price}</p>
        <p className="product-quantity">Quantity: {quantity} Kg</p>
        <p className="product-supplier">Supplier: {supplier}</p>
        <p className="product-description">{description}</p>
         
       
       </div>
       <div className="update-container">
       <div >
       <button onClick={handleDeliveredQuantity} className="update-btn w-">Delivered</button>
       </div>
       <div >
      
      <form   className="d-flex align-items-center px-4"  onSubmit={handleQuantity}>
                <input className="me-2 w-50" type="text" name="quantity" id="" placeholder=" quantity"   required/>
                
                <input className="w-50 login-btn"  type="submit" value="Restock" />
            </form>
       </div>
       
       </div>

    </div>
    );
};



export default FruitDetails;