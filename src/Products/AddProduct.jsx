import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { categoryValidation, descriptionValidation, instockValidation, NameValidation, priceValidation, quantityValidation, supplierValidation } from '../SubmitValidations';
function AddProduct() {

const {register,reset, handleSubmit, setValue ,formState:{errors}}=useForm();
function onSaveData(data){

  axios.post("http://localhost:5000/product", data)
       .then(res=>{
        if(res.status===201){
           alert("Product Details Stored...!");
           reset();
        }
       })
       .catch(errors=>{
         alert("Try Agail...!");
         console.log(errors);
       })
  
}

  return (
    <div className='d-flex justify-content-center'>
      <div className='card bg-info w-50  mt-2 p-3' >
<h1 className='text-center fs-3'>Add Product Here</h1>
<form  onSubmit={handleSubmit(onSaveData)}>

  <div>
    <p>{errors.productName && <small className='text-danger'>{errors.productName.message}</small>}</p>
    <label className='fs-4 form-label'>Enter Product Name:-</label>
    <input type='text' className='form-control' {...register("productName", NameValidation)} />
  </div>


  <div>
    <p>{errors.description && <small className='text-danger'>{errors.description.message}</small>}</p>
    <label className='fs-4 form-label'>Enter Product Description:-</label>
    <input type='text' className='form-control' {...register("description", descriptionValidation)} />
  </div>

  <div>
    <p>{errors.category && <small className='text-danger'>{errors.category.message}</small>}</p>
    <label className='fs-4 form-label'>Enter Product category:-</label>
    <input type='text' className='form-control' {...register("category", categoryValidation)} />
  </div>

  <div>
    <p>{errors.price &&  <small className='text-danger'>{errors.price.message}</small>}</p>
    <label className='fs-4 form-label'>Enter Product price:-</label>
    <input type='text' className='form-control' {...register("price", priceValidation)} />
  </div>

  <div>
    <p>{errors.quantity && <small className='text-danger'>{ errors.quantity.message}</small>}</p>
    <label className='fs-4 form-label'>Enter Product stock:-</label>
    <input type='text' className='form-control' {...register("quantity", quantityValidation)} />
  </div>

  <div>
    <p>{errors.supplier &&  <small className='text-danger'>{errors.supplier.message}</small>}</p>
    <label className='fs-4 form-label'>Enter supplier name:-</label>
    <input type='text' className='form-control' {...register("supplier" ,supplierValidation)} />
  </div>


   <div>
    <p>{errors.inStock && <small className='text-danger'>{errors.inStock.message}</small>}</p>
    <label  className='fs-4 form-label-check'>Is Product In Stock?</label>
    <input type='checkbox' className='form-check-input mt-3 ms-4 fs-4' {...register("inStock", instockValidation)} />
   </div>


<button type='submit' className='w-25 btn btn-success text-center fs-4 nt-2 '>Submit</button>

</form>
      </div>
    </div>
  )
}

export default AddProduct;
