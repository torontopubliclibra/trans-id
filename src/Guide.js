import { useState } from "react";

// import firebase functions
import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database'

const Guide = () => {

    const [ emailInput, setEmailInput ] = useState("");

    // set firebase endpoint
    const database = getDatabase(firebase)
    const databaseRef = ref(database, `/emails`)

    const handleSubscribe = (event) => {

        event.preventDefault();

        // push the item to the firebase endpoint
        push(databaseRef, emailInput);

        setEmailInput("");
    }

    return (
        <main>
            <h2>Trans I.D. Guide</h2>
            <p>The guide is currently in development. Sign up below to be emailed when it launches.</p>
            <form onSubmit={handleSubscribe}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={emailInput} onInput={(event) => {setEmailInput(event.target.value)}}></input>
                <button type="submit">Subscribe</button>
            </form>
        </main>
    )
}

export default Guide;