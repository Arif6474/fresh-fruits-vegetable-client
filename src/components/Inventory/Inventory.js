import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import Product from '../Product/Product';

import './Inventory.css'

const Inventory = () => {
      const [products] = useProducts([])
    return (
        
        <div>
            <h2 className=" fruits-title"> All Fruits</h2>
            <div className="products-container">
              {
                products.map(product => <Product key={product._id} product={product}></Product> )
              }
            </div>
        </div>
    );
};

export default Inventory;