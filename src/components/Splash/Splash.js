import React from 'react'
import { Link } from "react-router-dom"
import './Splash.css'

const Splash = () => {
    return (
        <div className="splash">
        <h1 className="title">vetTest</h1>
        <h2 className="subtitle">Choose your Species</h2>
        <div>
            <Link to="/canine"><button>Canine</button></Link>
        </div>
        <div>    
            <Link to="/feline"><button>Feline</button></Link>
        </div>
        </div>
    )
}

export default Splash
