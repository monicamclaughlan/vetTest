import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {RiHeartFill} from 'react-icons/ri'

const Header = () => {
    return (
        <header>
            <Link to="favorites"><RiHeartFill /></Link>
        </header>
    )
}

export default Header
