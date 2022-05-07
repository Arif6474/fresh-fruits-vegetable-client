import React from "react";
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className=" about-image">
        <img src="https://i.ibb.co/XZ92NYS/about1.jpg" alt="" />
      </div>
      <div className=" about-detail">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Established nearly 20 years ago, Fresh Fruits & Vegetables has developed a
          comprehensive product range and extensive network to become a global
          leader in the supply of fresh produce. We have worked hard to become
          the first choice for the worldwide procurement and supply of fresh
          produce. Our commitment to quality, supply and innovation is backed up
          by our international procurement team. Fresh Fruits & Vegetables provides
          specialised services which can be tailored to meet specific customer
          needs. Fresh Fruits & Vegetables’s purpose built facilities are designed to maximise
          supply chain efficiencies. Our production teams are trained to deliver
          professional customer service and high quality standards.We strive to
          be our customer’s first choice for the procurement and supply of fresh
          produce. Our mission is to surpass our customers requirements and
          expectations at all times.
        </p>
        <button className="about-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default AboutUs;
