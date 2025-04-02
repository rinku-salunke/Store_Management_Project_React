import React from 'react'
import img from '../assets/Product.jpeg'
import { Link, Links } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-dark p-2  d-flex justify-content-between'>
        <img src={img} alt='image not found...' width={"100px"}  ></img>
        <div className='mt-3'>
            <Link className='btn btn-light me-4' to={"/add"}>Add Product</Link>
            <Link className='btn btn-light me-4' to={"/view"}>View Products</Link>
            
        </div>
    </div>
  )
}

export default Header;
