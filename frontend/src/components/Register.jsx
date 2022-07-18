import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Register() {
    let history = useHistory();
    const [getName, setName] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");

    function registerUser() {
        const newUserObject = { username: getName, email: getEmail, password: getPassword };

        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserObject)
        }).catch(err => console.error(err))
    }

    function LoginPage(){
        history.push("/");
        window.location.reload(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        registerUser();
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <legend>Register</legend>
                    <ul>
                        <li>
                            <label for="username">Username:</label>
                            <input type="text" value={getName} onChange={(e) => setName(e.target.value)} id="userName-input" placeholder='Username'></input>
                        </li>
                        <li>
                            <label for="email">email:</label>
                            <input type="text" value={getEmail} onChange={(e) => setEmail(e.target.value)} id="email-input" placeholder='email'></input>
                        </li>
                        <li>
                            <label for="password">Password:</label>
                            <input type="password" value={getPassword} onChange={(e) => setPassword(e.target.value)}
                                id="password-input" placeholder='Password'></input>
                        </li>
         
                    </ul>
                </fieldset>
                <button type="submit">Register</button>
                <button onClick={() => LoginPage()}>Back</button>
            </form>
        </>
    )
}

export default Register