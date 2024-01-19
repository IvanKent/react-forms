import { useState } from "react"

export default function SignUpForm(){
    const [formData, setFormData] = useState({firstName: '', lastName: '', password: ''});

    function updateFormData (evt) {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
            currData[changedField] = newValue;
            return {...currData};
        })
    }
    function print(){
        console.log(formData);

    }
    return (
        <div>
            <label htmlFor="firstName">FirstName: </label>
            <input type="text" id="firstName" placeholder="first name" onChange={updateFormData} value={formData.firstName} name="firstName"/>
            <label htmlFor="lastName">LastName: </label>
            <input type="text" id="lastName" placeholder="last name" onChange={updateFormData} value={formData.lastName} name="lastName"/>
            <label htmlFor="password">Password: </label>
            <input type="text" id="password" placeholder="password" onChange={updateFormData} value={formData.password} name="password" />
            <button onClick={print}>Submit</button>
        </div>
    )
}