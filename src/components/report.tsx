import { useState } from "react"
import firebase from '../firebase/firebase'
import List from './list.js'  
const stateAbbr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

function ReportTab() {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [date, setDate] = useState("");
    const [info, setInfo] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [valid, setValid] = useState(true);
    const [type, setType] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
        switch (name){
            case "city":
                setCity(e.target.value);
            break;

            case "state":
                setState(e.target.value);
            break;

            case "date":
                setDate(e.target.value);
            break;

            case "info":
                setInfo(e.target.value);
            break;

            case "gender":
                setGender(e.target.value);
            break;

            case "n":
                setNationality(e.target.value);
            break;

            case "type":
                setType(e.target.value);
            break;
        }
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        firebase.db.collection("reports").add({
            "city": city,
            "state": state,
            "date": date,
            "description": info,
            "gender": gender,
            "nationality": nationality,
            "type": type
        }).then(documentReference => {
            console.log('document reference ID', documentReference.id)
        })
        .catch(error => {
            console.log(error.message)
        })
        alert("Form Submitted")
    }

    return (
        <form className="ReportTab" onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                    <div className="col">
                        <h1 className="text-center" id = "title">Report a Case</h1>
                    </div>
                </div>
            <div className="container" id = "form">
                

                <div className="row justify-content-center">
                    <div className="col-sm-5 col-md-6 col-lg-8 form-group">
                        <label htmlFor="cityInput" className="required">City</label>
                        <input
                            className="form-control"
                            type="text"
                            id="cityInput"
                            placeholder="City"
                            onChange={e => {handleChange(e, "city")}}
                            value={city}
                        />
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-1 form-group">
                        <label htmlFor="stateInput" className="required">State</label>
                        <select 
                            className="form-control" 
                            id="stateInput" 
                            onChange={e => {handleChange(e, "state")}}
                            value={state}
                        >
                            {
                                stateAbbr.map(name => (
                                    <option value={name} key={name}>{name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-sm-5 col-md-4 col-lg-3 form-group">
                        <label htmlFor="dateInput" className="required">Date</label>
                        <input
                            className="form-control" 
                            type="date" 
                            id="dateInput"
                            placeholder="Date"
                            onChange={e => {handleChange(e, "date")}}
                            value={date}
                        />
                    </div>
                </div>

                <div className="row justify-content-center mt-2">
                    <div className="col-md-7 col-xl-7 form-group">
                        <label htmlFor="nInput">Nationality</label>
                        <input 
                            className="form-control" 
                            id="nInput" 
                            placeholder="Nationality" 
                            onChange={e => handleChange(e,"n")} 
                            value={nationality} 
                        />
                    </div>

                    <div className="col-md-5 col-xl-5 form-group">
                        <label htmlFor="genderInput" className="required">Gender</label>
                        <select 
                            className="form-control" 
                            id="genderInput" 
                            onChange={e => {handleChange(e, "gender")}}
                            value={gender}
                        >
                            <option value="-" key="-">--</option>
                            <option value="M" key="M">M</option>
                            <option value="F" key="F">F</option>
                            <option value="Other" key="Other">Other</option>
                            <option value="Unknown / Prefer not to say" key="UP">Unknown / Prefer not to say</option>
                        </select>

                    </div>
                </div>

                <div className="row justify-content-center mt-2">
                    <div className="col-12 form-group">
                        <label htmlFor = "typeInput">Type</label>
                        <input type="text" id="typeInput" className="form-control" placeholder = "Type" value={type} onChange={e => {handleChange(e,"type")}}></input>
                    </div>
                </div>

                <div className="row justify-content-center mt-2">
                    <div className="col-12 form-group">
                        <label htmlFor="noteInput">Description</label>
                        <textarea 
                            className="form-control" 
                            id="noteInput"
                            placeholder="Description"
                            onChange={e => {handleChange(e, "info")}}
                            value={info}
                        />
                    </div>
                </div>

                <div className="row justify-content-center mt-2">
                    <div className="col-12">
                        {
                            !valid ? <p style={{color: "red"}}>* All required fields must be filled in</p> : null
                        }
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default ReportTab;