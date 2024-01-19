import { useState } from "react";

function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({product: '', quantity: 0});
    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if(product.length === 0){
            setProductIsValid(false);
        }else{
            setProductIsValid(true);
        }
    }

    function handleChange(evt){
        if(evt.target.name === 'product'){
            validate(evt.target.value)
        }
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if(productIsValid){
            addItem(formData)
            setFormData({product: '', quantity: 0, id:''})
        }

    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <h1>Product is {formData.product} and quantity is {formData.quantity}</h1>
            <label htmlFor="product">
                Product Name: 
            </label>
            <input type="text" 
            placeholder="product name"
            name="product"
            id="product"
            value={formData.product}
            onChange={handleChange}/>

            {!productIsValid && (<p style={{color: 'red'}}>Product name cannot be empty!</p>)}

            <label htmlFor="quantity">
                Quantity: 
            </label>
            <input type="number"
            placeholder="quantity"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}/>
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;