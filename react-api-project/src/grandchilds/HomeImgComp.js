import React from "react"
import "../App.css"



function HomeImgComp(props){

    return(
        <div className="homeImgComp-container">
        <img className="homeImgComp-img" src={`https://random.dog/${props.rand}`} alt="dogs" style={{height:"500px", width:"400"}}/>
        </div>
    )
}

export default HomeImgComp