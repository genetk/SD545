import React, { useEffect, useState ,MouseEvent} from 'react'
import axios from 'axios'
import Product from '../types';
type Props={
    product:Product[]
    onDelete:(id:number)=>void
}
export default function ProductList(prop:Props) {
    const{product,onDelete}=prop
    const handleDelete=(id:number)=>{
      onDelete(id)
        
    }

    return (
        <div>
            <h2>Product List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {product.map(prod => (
                        <tr key={prod.id}>
                            <th scope="row">{prod.id}</th>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>{prod.description}</td>
                            <td><button className='btn btn primary ' onClick={(e:MouseEvent<HTMLButtonElement>)=>{handleDelete(prod.id)}}>Delete</button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

