import { async } from "@firebase/util";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getMyItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/item?email=${email}`;
      const { data } = await axios.get(url);
      console.log(data);
      setItems(data);
    };
    getMyItems();
  }, [user]);
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/fruit/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="products-container">
      {items.map((item) => (
        <div key={item._id}>
          <div className="product-container">
            <div className=" product-image">
              <img className="img-fluid w-100" src={item?.image} alt="" />
            </div>
            <div className="product-details">
              <p className="product-name"> {item?.name}</p>
              <p className="product-price">Price: {item?.price}</p>
              <p className="product-quantity">Quantity: {item?.quantity} Kg</p>
              <p className="product-supplier">Supplier: {item?.supplier}</p>
              <p className="product-description">
                {item?.description.slice(0, 150)} ...
              </p>
            </div>

            <button className="delete-btn w-50" onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
