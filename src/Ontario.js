import { useState } from "react";

const Ontario = () => {

    const [ selected, setSelected ] = useState(false);

    const [ selection, setSelection ] = useState({
        nameChange: false,
        healthCard: false,
        genderMarker: false,
        photoID: false,
        passport: false,
        SIN: false,
        CRA: false
    });
    const [ selection2, setSelection2 ] = useState({
        age: ""
    })


    const [ screen, setScreen ] = useState(1);

    const handleValueChange = (e) => {

        e.preventDefault();

        let newSelection = { ...selection };

        if (selection[e.target.value] === false){

            newSelection[e.target.value] = true;

        } else {
            newSelection[e.target.value] = false;

        }

        for (let choice in newSelection){
            if (newSelection[choice]){
                setSelected(true);
                break;
            } else {
                setSelected(false);
            }
        }

        setSelection(newSelection);
    }

    const handleSelection = (e, key) => {

        let newSelection2 = { ...selection2 };

        newSelection2[key] = e.target.value;

        setSelection2(newSelection2);

    }

    const handleBack = (e) => {
        
        e.preventDefault();

        setScreen(screen - 1);
    }

    const handleNext = (e) => {
        
        e.preventDefault();

        if(selected){
            setScreen(screen + 1);
        } else {
            alert('Please make a selection');
        }
    }

    const ServicesButton = (props) => {
        return (
            <button
                value={props.value}
                onClick={handleValueChange}
                className={
                    selection[props.value]
                    ? "servicesButton selected"
                    : "servicesButton"
                }
                >{props.name}
            </button>
        )
    }

    const Screen1 = () => {
        return (
        <>
            <div className="servicesButtons">
                <ServicesButton value="nameChange" name="Name Change"/>
                <ServicesButton value="healthCard" name="Health Card"/>
                <ServicesButton value="genderMarker" name="Gender Marker"/>
                <ServicesButton value="photoID" name="Photo I.D."/>
                <ServicesButton value="passport" name="Passport"/>
                <ServicesButton value="SIN" name="Social Insurance Number"/>
                <ServicesButton value="CRA" name="Canadian Revenue Agency"/>
            </div>
            <div className="guideNav">
                <button className="next" onClick={handleNext}>Next</button>
            </div>
        </>
        )
    }

    const Screen2 = () => {
        return (
        <>
            <div className="ageSelect">
                <label htmlFor="age">How old are you?</label>
                <select name="age" id="age" value={selection2.age} onChange={(e) => handleSelection(e, "age")}>
                    <option value="">Select your age</option>
                    <option value="<16">Younger than 16</option>
                    <option value="16-17">16 or 17 years old</option>
                    <option value="18+">Older than 18</option>
                </select>
            </div>
            <div className="guideNav">
                <button className="back" onClick={handleBack}>Back</button>
                <button className="next" onClick={handleNext}>Next</button>
            </div>
        </>
        )
    }

    const UnderAgeScreen = () => {
        return (
            <>
                <p>Unfortunately Trans. I.D. is unavailable for those under 16 at this time.</p>
                <button className="back" onClick={handleBack}>Back</button>
            </>
        )
    }

    const Screen3 = () => {
        return (
        <>
            {
                selection2.age === "<16"
                ? <UnderAgeScreen />
                : <h1>Hello</h1>
            }
        </>
        )
    }

    const Screens = () => {
        switch (screen){
            case 1: return <Screen1 />
            case 2: return <Screen2 />
            case 3: return <Screen3 />
            default: return <h1>Broken</h1>
        }
    }

    return (
        <div className="guide">
            <Screens />
        </div>
    )
}

export default Ontario;