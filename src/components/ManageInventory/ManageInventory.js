import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = useProducts([])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if(proceed) {
            const url = `http://localhost:5000/fruit/${id}`
     fetch(url, {
         method: 'DELETE',

     }).then(res => res.json())
     .then(data => {
         console.log(data);
         const remaining = products.filter(product => product._id !== id);
         setProducts(remaining)
     })
 }
        }


    return (
        <div>
        <h2 className=" manage-title"> Manage Inventories</h2>
        <div className="products-container">
          {
            products.map(product => <div key={product._id} product={product}>
                <div className="product-container">
        <div className=" product-image">
            <img className="img-fluid w-100" src={product.image} alt="" />
        </div>
       <div className="product-details">
       <p className="product-name"> {product.name}</p>
        <p className="product-price">Price: {product.price}</p>
        <p className="product-quantity">Quantity: {product.quantity} Kg</p>
        <p className="product-supplier">Supplier: {product.supplier}</p>
        <p className="product-description">{product.description.slice(0, 150)} ...</p>
         
       
       </div>
       
       <button onClick={() =>handleDelete(product._id)} className="delete-btn w-50">Delete</button>
       

    </div>
            </div> )
          }
        </div>
        <Link className= "products-btn" to="/add-inventory">Add new inventory</Link>
    </div>
    );
};

export default ManageInventory;