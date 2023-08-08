import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

export default function Signin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordPlaceholder, setPlaceholder] = useState("")

    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: username, password: password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    function handleInputChange(e) {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        // sync the state and the value in the dom
        if (inputType === "username") {
            setUsername(inputValue)
        } else if (inputType === "password") {
            setPassword(passwordPlaceholder + "*")
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="Password"
                        value={passwordPlaceholder}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="button" onClick={handleFormSubmit}>Sign In</button>
            </form>
        </div>
    )
}
