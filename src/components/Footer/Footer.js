import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <h2>INFORMATION</h2>
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="footer">
                <h2>MY ACCOUNT</h2>
                <p>My Account</p>
                <p>Order History</p>
                <p>Returns</p>
                <p>Wish List</p>

            </div>
            <div className="footer">
                <h2>EXTRAS</h2>
                <p>Contact Us</p>
                <p>Specials</p>
                <p>Affiliate</p>
                <p>Brands</p>

            </div>
        </div>
    );
};

export default Footer;