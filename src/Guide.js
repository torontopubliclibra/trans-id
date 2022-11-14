import { useState } from "react";

const Guide = () => {

    const [ emailInput, setEmailInput ] = useState("");

    const handleSubscribe = (event) => {

        event.preventDefault();

        setEmailInput("");
    }

    return (
        <main>
            <h2>The guide is currently in development.</h2>
            <p>Sign up below to be emailed when it launches.</p>
            <form onSubmit={handleSubscribe}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={emailInput} onInput={(event) => {setEmailInput(event.target.value)}}></input>
                <button type="submit">Subscribe</button>
            </form>
        </main>
    )
}

export default Guide;