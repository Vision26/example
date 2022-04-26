import React from "react"

import AdoptImgCompB from "../grandchilds/AdoptImgCompB"
import AdoptImgCompC from "../grandchilds/AdoptImgCompC"
import AdoptImgCompD from "../grandchilds/AdoptImgCompD"
import AdoptImgCompE from "../grandchilds/AdoptImgCompE"
import AdoptImgCompF from "../grandchilds/AdoptImgCompF"
import AdoptImgCompG from "../grandchilds/AdoptImgCompG"
import AdoptImgCompH from "../grandchilds/AdoptImgCompH"
import AdoptImgCompI from "../grandchilds/AdoptImgCompI"
import AdoptImgCompJ from "../grandchilds/AdoptImgCompJ"
import AdoptImgCompK from "../grandchilds/AdoptImgCompK"
import AdoptImgCompL from "../grandchilds/AdoptImgCompL"
import AdoptImgCompM from "../grandchilds/AdoptImgCompM"

import "../App.css"
import { Link } from "react-router-dom"

function Adopt() {

    return (
        <div className="adopt-container">
                    <h1 className="adopt-header">Your Buddy Awaits!</h1>
            <Link to="/register">
                <div className="adopt-imgsA">
                    <div>
                        <AdoptImgCompB />
                    </div>
                    <div>
                        <AdoptImgCompC />
                    </div>
                    <div>
                        <AdoptImgCompD />
                    </div>
                    <div>
                        <AdoptImgCompE />
                    </div>
                    <div>
                        <AdoptImgCompF />
                    </div>
                    <div>
                    <AdoptImgCompG />
                    </div>
                    <div>
                    <AdoptImgCompH />
                    </div>
                    <div>
                    <AdoptImgCompI />
                    </div>
                    <div>
                    <AdoptImgCompJ />
                    </div>
                    <div>
                    <AdoptImgCompK />
                    </div>
                    <div>
                    <AdoptImgCompL />
                    </div>
                    <div>
                    <AdoptImgCompM />
                    </div>

                    {/* <AdoptImgCompB />
                <AdoptImgCompC />
                <AdoptImgCompD />
                <AdoptImgCompE />
                <AdoptImgCompF />
                <AdoptImgCompG />
                <AdoptImgCompH />
                <AdoptImgCompI />
                <AdoptImgCompJ />
                <AdoptImgCompK />
                <AdoptImgCompL />
                <AdoptImgCompM /> */}

                </div>
            </Link>
        </div>
    )
}

export default Adopt