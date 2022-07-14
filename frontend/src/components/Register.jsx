import React from 'react'
import { useHistory } from "react-router-dom";

function Register() {
    let history = useHistory();
    
    function LoginPage(){
        history.push("/");
        window.location.reload(true);
    }

    return (
        <>
            <form>
                <fieldset>
                    <legend>Register</legend>
                    <ul>
                        <li>
                            <label for="username">Username:</label>
                            <input type="text" id="username" required />
                        </li>
                        <li>
                            <label for="email">email:</label>
                            <input type="text" id="email" required />
                        </li>
                        <li>
                            <label for="password">Password:</label>
                            <input type="password" id="password" required />
                        </li>
                        <li>
                        </li>
                    </ul>
                </fieldset>
                <button>Register</button>
                <button onClick={() => LoginPage()}>Back</button>
            </form>
        </>
    )
}

export default Register