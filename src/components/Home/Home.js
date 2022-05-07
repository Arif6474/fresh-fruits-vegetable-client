import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import AskQuestion from '../AskQuestion/AskQuestion';
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
                products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product> )
              }
            </div>
            <Link className= "products-btn" to="/fruits">More Fruits</Link>
        </div>
        <AskQuestion></AskQuestion>
        </div>
    );
};

export default Home;