import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

function Login() {

    const [user, setUser] = useState('');

    let history = useHistory();
    
    function Register(){
        history.push("/register");
        window.location.reload(true);
    }

    function login(){
        // hämta lösenord samt användarnamn
        // fetch samt login

        history.push("/homePage");
        window.location.reload(true);
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