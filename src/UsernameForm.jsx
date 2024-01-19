import { useState } from "react";

function UsernameForm() {
    const [username, setUsername] = useState('dfsf')

    function text(evt){
        setUsername(evt.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={text}/>
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;