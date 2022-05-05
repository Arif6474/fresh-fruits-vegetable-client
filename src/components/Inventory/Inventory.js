import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
      const [products] = useProducts([])
    return (
        
        <div>
            <h2 className=" products-title"> All Fruits</h2>
            <div className="products-container">
              {
                products.map(product => <Product product={product}></Product> )
              }
            </div>
        </div>
    );
};

export default Inventory;