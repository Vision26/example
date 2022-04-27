import React, {useContext} from "react"
import { apiContext } from "../APIContext"
import "../App.css"

function AdoptImgCompB() {
       const { APIstate } = useContext(apiContext)
    const adoptImgs = APIstate.map(img => img)
    const adoptRandImg = adoptImgs[Math.floor(Math.random() * 700)]
    return (
        <div>
            <img src={`https://random.dog/${adoptRandImg}`} style={{width:"200px", height:"200px"}}alt="dogos" />
           
        </div>
    )
}

export default AdoptImgCompB