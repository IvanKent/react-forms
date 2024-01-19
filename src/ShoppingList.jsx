import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuidv4 } from 'uuid';

export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: uuidv4(), product: 'bananas', quantity: 10},
        {id: uuidv4(), product: 'eggs', quantity: 12}])


    function addItem(item) {
        if(!item.product){
            return;
        }
        setItems(currData => {
            return [
                ...currData,
                {...item, id: uuidv4()}
            ]
        })
    }
    
    return (
        <div>
            <ShoppingListForm addItem={addItem}/>
            <h1>ShoppingList</h1>
            <ul>
                {items.map(item => {
                    return <li key={item.id}>{item.product} --- {item.quantity}</li>
                })}
            </ul>
            
        </div>
    )
}