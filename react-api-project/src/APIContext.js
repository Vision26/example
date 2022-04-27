import axios from "axios"
import React, { useEffect, useState } from "react"
// import App from "./App"
const apiContext = React.createContext()

function APIContextProvider(props) {
    const [APIstate, setAPIstate] = useState([])

    useEffect(() => {
        axios.get("https://random.dog/doggos")
            .then(response => setAPIstate(response.data))
            .catch(err => console.log(`Error: ${err}`))
    }, [])
//function build 
    return (
        <apiContext.Provider value={{ APIstate }}>
            {props.children}
        </apiContext.Provider>
    )
}

export { APIContextProvider, apiContext }