import React, {useContext} from "react"
import { apiContext } from "../APIContext"

function AdoptImgCompL() {
       const { APIstate } = useContext(apiContext)
    const adoptImgs = APIstate.map(img => img)
    const adoptRandImg = adoptImgs[Math.floor(Math.random() * 65)]
    return (
            <img src={`https://random.dog/${adoptRandImg}`} style={{width:"200px", height:"200px"}}alt="dogos" />
    )
}

export default AdoptImgCompL