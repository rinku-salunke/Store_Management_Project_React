export const NameValidation={
    required:{value:true,message:"ProductName Must Be Required...!" },
    minLength:{value:15, message:"product name is too short...!"},
    maxLength:{value:25, message:"product name is too large...!"}
}

export const  descriptionValidation={
required:{value:true,message:"description of product must be required...!",  },
minLength:{value:20, message:"description is too short...!"},
maxLength:{value:25, message:"description is too large...!"}
}


export const categoryValidation={
required:{value:true,message:"category of product must be required...!" },
minLength:{value:5, message:"category of product is too short...!"},
maxLength:{value:8, message:"category of product is too large...!"}
}

export const priceValidation={
required:{value:true,message:"price of product must be required...!" },
min:{value:100, message:"Price is too be less"},
max:{value:50000, message:"Price is too be large...!"}


}

export const quantityValidation={
required:{value:true,message:"quantity of product must be required...!" },
min:{value:5, message:"quantity is too be less"},
max:{value:50, message:"quantity is too be large...!"}

}

export const supplierValidation={
required:{value:true,message:"supplier name of product  must be required...!" },
minLength:{value:15, message:"Supplier name is too be less...!"},
maxLength:{value:30, message:"supplier name is too be large...!"},
}

export const instockValidation={
required:{value:true,message:"it is mandatory to check eithe product is available or not?" },
}