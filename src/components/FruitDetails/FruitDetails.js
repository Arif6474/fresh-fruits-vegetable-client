import React, { useEffect,  useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './FruitDetails.css'

const FruitDetails = () => {
    const {fruitId} = useParams();
    const [fruit , setFruit] = useState({});
    const [quantity , setQuantity] = useState({})
   let stock = parseInt(fruit?.quantity)
  
    
    
    useEffect(() => {
        const url = `http://localhost:5000/fruit/${fruitId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFruit(data))
    }, [])
  
 useEffect(() => {
    const url = `http://localhost:5000/fruit/${fruitId}`
     fetch(url)
     .then(res => res.json())
     .then(data => setQuantity(data))
 },[quantity])




  const handleQuantity = (event) => {
    event.preventDefault();
    const addQuantity = parseInt(event.target.quantity.value);
    const newQuantity = parseInt(stock + addQuantity);
    const fruitQuantity = {newQuantity}
    console.log(fruitQuantity);
     // update quantity
     const url = `http://localhost:5000/fruit/${fruitId}`
    fetch(url ,{
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(fruitQuantity)
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      setQuantity(data)
      alert('successfully sent')
      event.target.reset();
  })
  }



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
       <div className="update-container">
       <div >
       <button  className="update-btn w-">Delivered</button>
       </div>
       <div >
       <Form className="d-flex align-items-center px-4" onSubmit={handleQuantity}>
        <Form.Group className="me-2 w-50" controlId="formBasicEmail">
          <Form.Control type="text" name='quantity' placeholder=" quantity" />
        </Form.Group>
        
        <button className="w-50 login-btn" type="submit">
         Restock
        </button>
      </Form>
       </div>
       
       </div>

    </div>
    );
};

export default FruitDetails;