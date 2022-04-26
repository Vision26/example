import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./childs/Home"
import Register from "./childs/Donate"
import Adopt from "./childs/Adopt"

function App() {
  return (
    <div className="container">

      <h1 className="app-h1">SAVE A PAW</h1>

      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    
      <Footer />
    </div>
  )
}

export default App;
