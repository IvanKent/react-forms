import { useState } from "react"

export default function SignUpForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function updateFirstName (evt) {
        setFirstName(evt.target.value)
    }
    function updateLastName (evt) {
        setLastName(evt.target.value)
    }
    function print(){
        console.log(firstName, lastName);
    }
    return (
        <div>
            <label htmlFor="firstName">FirstName: </label>
            <input type="text" id="firstName" onChange={updateFirstName} value={firstName}/>
            <label htmlFor="lastName">LastName: </label>
            <input type="text" id="lastName" onChange={updateLastName} value={lastName} />
            <button onClick={print}>Submit</button>
        </div>
    )
}