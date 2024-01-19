import { useState } from "react";

function ShoppingListForm() {
    const [formData, setFormData] = useState({product: '', quantity: 0});
    function handleChange(evt){
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }
    return (
        <form action="">
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

            <label htmlFor="quantity">
                Quantity: 
            </label>
            <input type="number"
            placeholder="quantity"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}/>
        </form>
    )
}

export default ShoppingListForm;