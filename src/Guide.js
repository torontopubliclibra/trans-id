import { useState } from "react";

import Ontario from "./Ontario";

// // import firebase functions
// import firebase from './firebase';
// import { getDatabase, ref, push } from 'firebase/database'

const Guide = () => {

    // const [ emailInput, setEmailInput ] = useState("");
    const [ province, setProvince ] = useState("");
    // const [ age, setAge ] = useState("");
    // const [ residency, setResidency ] = useState("");

    // // set firebase endpoint
    // const database = getDatabase(firebase)
    // const databaseRef = ref(database, `/emails`)

    // const handleSubscribe = (event) => {

    //     event.preventDefault();

    //     // push the item to the firebase endpoint
    //     push(databaseRef, emailInput);

    //     setEmailInput("");
    // }

    const ProvinceSelect = (
            <>
            <div className="provinceSelect">
                <label htmlFor="provinces">Which province do you live in?</label>
                <select name="provinces" id="provinces" defaultValue="" onChange={(event) => {setProvince(event.target.value)}}>
                    <option value="">Select a province</option>
                    <option value="Ontario">Ontario</option>
                </select>
            </div>
            </>
        )

    return (
        <main>
            <h2>Trans I.D. Guide</h2>
            {ProvinceSelect}
            {
                province === "Ontario"
                ? <Ontario />
                : null
            }
        </main>
    )
}

export default Guide;