import React from 'react'
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();
    
    function Register(){
        history.push("/register");
        window.location.reload(true);
    }

    function login(){
        // hämta lösenord samt användarnamn
        // fetch samt login
    }

    return (
        <>
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Login</legend>
              <ul>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button onClick={() => login()}>Login</button>
            <button type="button" onClick={ () => Register()}>Create an account</button>
          </form>
        </>
    )
}

export default Login