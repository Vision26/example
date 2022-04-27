import React, { useState } from "react"
import "../App.css"

function Register() {

    const [donateState, setdonateState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        address: '',
        maritalStatus: '',
        DOB: '',
        occupation: '',
        salary: '',
        summary: '',
        donationAmount: 0,
        yourName: [],
        yourAge: [],
        yourAddress: [],
        yourMarital: [],
        yourDOB: [],
        yourOccupation: [],
        yourSalary: [],
        yourSummary: [],
        yourDA: []
    })


    const handleChange = event => {
        const { name, value } = event.target
        setdonateState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        setdonateState(prev => ({
            yourName: [...prev.yourName, `${prev.firstname} ${prev.lastname}`],
            yourAge: [...prev.yourAge, prev.age],
            yourAddress: [...prev.yourAddress, prev.address],
            yourMarital: [...prev.yourMarital, prev.maritalStatus],
            yourDOB: [prev.yourDOB, prev.DOB],
            yourOccupation: [prev.yourOccupation, prev.occupation],
            yourSalary: [prev.yourSalary, prev.salary],
            yourSummary: [prev.yourSummary, prev.summary],
            yourDA: [prev.yourDA, prev.donationAmount],
            firstname: prev.firstname = "",
            lastname: prev.lastname = "",
            age: prev.age = "",
            address: prev.address = "",
            maritalStatus: prev.maritalStatus = "",
            DOB: prev.DOB = "",
            occupation: prev.occupation = "",
            salary: prev.salary = "",
            summary: prev.summary = "",
            donationAmount: prev.donationAmount = ""
        }))
    }


    return (
        <div className="donate-container">
            <h1 className="donate-header">Register/Donate</h1>

            <div className="input-container">
                <ul className="donate-nodot">
                    <form>

                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            value={donateState.firstname}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            value={donateState.lastname}
                            onChange={handleChange}
                        />
                        <br />
                        <label>
                            {donateState.yourName.map(name => <li>{name}</li>)}
                        </label>
                        <br />
                        <br />
                        <br />

                        <input
                            type="number"
                            placeholder="Age"
                            name="age"
                            value={donateState.age}
                            onChange={handleChange}
                        />
                        <br />
                        <label>
                            {donateState.yourAge.map(age => <li>{age}</li>)}
                        </label>
                        <br />
                        <br />
                        <br />

                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={donateState.address}
                            onChange={handleChange}
                        />
                        <br />
                        <label>
                            {donateState.yourAddress.map(address => <li>{address}</li>)}
                        </label>
                        <br />
                        <br />
                        <br />

                        <select
                            name="maritalStatus"
                            value={donateState.maritalStatus}
                            onChange={handleChange}>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Choose To Not Answer">Choose To Not Answer</option>
                        </select>
                        <br />
                        <label>
                            {donateState.yourMarital.map(marital => <li>{marital}</li>)}
                        </label>
                        <br />
                        <br />
                        <br />

                        <input
                            type="date"
                            placeholder="Date Of Birth"
                            name="DOB"
                            value={donateState.DOB}
                            onChange={handleChange}
                        />
                        <br />
                        <label>
                            {donateState.yourDOB.map(birth => <li>{birth}</li>)}
                        </label>
                        <br />
                        <br />
                        <br />

                        <input
                            type="text"
                            placeholder="Occupation"
                            name="occupation"
                            value={donateState.occupation}
                            onChange={handleChange}
                        />
                        <br />
                        <labe>
                            {donateState.yourOccupation.map(occup => <li>{occup}</li>)}
                        </labe>
                        <br />
                        <br />
                        <br />

                        <label>
                            Donation Amount: 
                        </label>
                        <br/>
                        <select
                            name="salary"
                            value={donateState.salary}
                            onChange={handleChange}>
                            <option value="$20k - 33k">$20k - $30k</option>
                            <option value="$45k - 60k">$45k - $60k</option>
                            <option value="$70k - $90k">$70k - $90k</option>
                        </select>
                        <br />
                        <br/>
                        {donateState.yourSalary.map(salaries => <li>{salaries}</li>)}
                        <br />
                        <br />
                        <br />

                        <textarea
                            type="text"
                            placeholder="Summary"
                            name="summary"
                            value={donateState.summary}
                            onChange={handleChange}
                        />
                        <br />
                        <label>
                            {donateState.yourSummary.map(summ => <li>{summ}</li>)}
                        </label>
                        <br />
                        <br />
                        <br />

                        <select
                            name="donationAmount"
                            value={donateState.donationAmount}
                            onChange={handleChange}
                        >
                            <option value="$5">$5</option>
                            <option value="$15">$15</option>
                            <option value="$50">$50</option>
                            <option value="$100">$100</option>
                            <option value="$200">$200</option>
                        </select>
                        <br />
                        <label>
                            {donateState.yourDA.map(donation => <li>{donation}</li>)}
                        </label>
                        <br />
                        <br />
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                </ul>
            </div>

        </div>

    )
}

export default Register