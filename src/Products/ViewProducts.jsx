import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';  

function ViewProducts() {
    const [products, setProducts] = useState([]);

    const onGetProducts = () => {
        axios.get("http://localhost:5000/product")
             .then(res => {
                console.log(res);
                if (res.status === 200) {
                    alert("Data Fetched Successfully...!");
                    setProducts(res.data);
                }
            })
              .catch(error => {
                alert("Something Went Wrong...!");
                console.log(error);
            });
    };

    const onDeleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            axios
                .delete(`http://localhost:5000/product/${id}`)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Product deleted successfully!");
                        setProducts(products.filter((product) => product.id !== id));
                    }
                })
                .catch((error) => {
                    alert("Failed to delete the product.");
                    console.error("Error deleting product:", error);
                });
        }
    };


   

    useEffect(() => {
        onGetProducts();
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="table-responsive mt-5">
                <h1 className='text-center mb-4 mt-4'>View Products Here...!</h1>
                <table className="table table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>ProductID</th>
                            <th>ProductName</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Instock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.supplier}</td>
                                <td>{product.inStock ? "True" : "False"}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                                    <button className='btn btn-danger btn-sm' onClick={() => onDeleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewProducts;
