import React from 'react';
import { useForm } from "react-hook-form";
const AddInventory = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    const url = `http://localhost:5000/fruit`
    fetch(url,{
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result=> console.log(result))
    
    };
    return (
        <div className="w-50 mx-auto ">
            <h3 className="text-center">Add new inventory</h3>
            <form className="d-flex flex-column"  onSubmit={handleSubmit(onSubmit)}>
      <input  className="mb-2 " placeholder="Name" {...register("name")} />
      <input  className="mb-2 " placeholder="Supplier" {...register("supplier")} />
      <textarea className="mb-2 " placeholder="Description" {...register("description")} />
      <input className="mb-2 " type="number"  placeholder="Price" {...register("price")} />
      <input className="mb-2 " type="number"  placeholder="Quantity" {...register("quantity")} />
      <input className="mb-2 " placeholder="Image url" type="text" {...register("image")} />
      <input className="update-btn mt-2"  type="submit" value="Add Item"/>
    </form>
        </div>
    );
};

export default AddInventory;