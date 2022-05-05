import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products ] =useProducts([]);
    return (
        <div>
           <Banner></Banner>
           
        <div>
            <h2 className=" products-title">Fruits</h2>
            <div className="products-container">
              {
                products.slice(0, 6).map(product => <Product product={product}></Product> )
              }
            </div>
            <Link className= "products-btn" to="/products">More Fruits</Link>
        </div>
        </div>
    );
};

export default Home;