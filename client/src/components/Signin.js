import React from "react";

export default function Signin() {
    return(
        <div>
            <h1>Sign In</h1>
            <section>
                <label>
                    Username:
                    <input type="text" name="Username" />
                </label>
                <label>
                    Password:
                    <input type="text" name="Password" />
                </label>
                <button>Sign In</button>
            </section>
        </div>
    )
}
