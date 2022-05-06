const { useState, useEffect } = require("react")

const useProducts = () => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        fetch('https://stormy-plateau-24083.herokuapp.com/fruit')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts]
}

export default useProducts;