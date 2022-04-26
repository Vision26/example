import React, {useContext} from "react"
import { apiContext } from "../APIContext"

function AdoptImgCompH() {
       const { APIstate } = useContext(apiContext)
    const adoptImgs = APIstate.map(img => img)
    const adoptRandImg = adoptImgs[Math.floor(Math.random() * 50)]
    return (
            <img src={`https://random.dog/${adoptRandImg}`} style={{width:"200px", height:"200px"}}alt="dogos" />
    )
}

export default AdoptImgCompH