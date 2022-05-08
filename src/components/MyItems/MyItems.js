
import { async } from '@firebase/util';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
     const [user] = useAuthState(auth)
    const [item , setItem] =useState([]);
    useEffect(() => {

        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/item?email=${email}`
            const {data} = await axios.get(url);
            console.log(data);
            setItem(data);
        }
        getMyItems()
        
    }, [user])
    return (
        <div>
            <h2>my orders {item.length}</h2>
        </div>
    );
};

export default MyItems;