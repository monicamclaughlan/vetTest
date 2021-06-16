import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import {IoPawSharp} from 'react-icons/io5'

const Footer = () => {
    return (
        <div className="footer-home">
            <Link to="/"><IoPawSharp/></Link>
        </div>
    )
}

export default Footer
