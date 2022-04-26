import React, { useContext } from "react"
import { apiContext } from "../APIContext"
import HomeImgComp from "../grandchilds/HomeImgComp"
import "../App.css"

function Home() {
const { APIstate } = useContext(apiContext)
// const img = APIstate ?  APIstate.map((imgs, index) => <HomeImgComp key={imgs.data} images={imgs}/>) : "Loading..."
// console.log(img)
const randomImg = APIstate.map(arr => arr)
const random = randomImg[Math.floor(Math.random() * randomImg.length)]
console.log(random)

    return (
        <div className="home-container">
            <header className="home-header">Welcome!</header>
            <HomeImgComp 
            rand={random}
            />
            <main className="home-main">
                We believe each dog deserves a happy home. A home where safety and love
                is given unconditionally, and every dog deserves that type of home. We strive
                to make that happen for every dog, and we believe every new dog parent will find
                there forever pal through this program. So, dont hesitate you're in good hands. 
                Welcome to Save A Paw! 
            </main>
        </div>
    )
}

export default Home