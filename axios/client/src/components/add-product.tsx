import axios from 'axios'
import React, { FormEvent, useState,MouseEvent, useEffect, ChangeEvent } from 'react'
import Product from '../types';
type Props={
  
    onProduct:(prod:Product)=>void
   
}
export default function AddProduct(prop:Props) {
    const {onProduct}=prop
    const [title, setTitle]=useState('');
    const [price, setPrice]=useState(0);
    const [description, setDescription]=useState('');
    
    
    const submitForm=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    const response=await axios.post('http://localhost:8000/products',{title,price,description})
          if(response.status === 201){
             onProduct(response.data)
             setTitle('')
             setPrice(0)
             setDescription('')
   }
    }
    return (
        <div><h2>Add a new Product</h2>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" id="title" value={title} onChange={(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={price} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPrice(Number(e.target.value))} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows={3} value={description} onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setDescription(e.currentTarget.value)}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    )
}
