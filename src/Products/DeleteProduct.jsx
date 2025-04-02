import React from 'react'

function DeleteProduct() {
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
  return (
    <div>DeleteProduct</div>
  )
}

export default DeleteProduct;
