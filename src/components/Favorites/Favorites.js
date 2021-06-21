import React from 'react'
import { IoGitPullRequest } from 'react-icons/io5'
import {Link} from 'react-router-dom'
import './Favorites.css'
import {IoMdRemoveCircle} from 'react-icons/io'

const Favorites = ({favorites, removeFromFavorites}) => {

    const favoriteTests = favorites.map((fav, index) => { 
        if (fav.species === "Canine"){
        return ( 
            <div className="favorites" key={index}>
                <Link to={`/canine/${fav.id}`} ><button className="favorite-title">{fav.title}</button></Link>
                <button className="remove" onClick={() => {
                    removeFromFavorites(index)
                    fav.favorite = false}}>
                        <IoMdRemoveCircle/></button>
            </div>
        )}
        else if (fav.species === "Feline"){ 
            return ( 
                <div className="favorites" key={index}>
                <Link to={`/feline/${fav.id}`} ><button className="favorite-title">{fav.title}</button></Link>
                <button className="remove" onClick={() => {
                    removeFromFavorites(index)
                    fav.favorite=false}}>
                        <IoMdRemoveCircle/></button>
            </div>
            )
        }
    })

    const noFavorites = () => { 
        return ( 
            <div className="no-favorites">
            <h2>No Favorites Yet! </h2>
            <Link to="/"><button>Back to Home</button></Link>
            </div>
        )
    }
    return favorites.length > 0 ? 
    <div className="favorite-list">
        {favoriteTests} 
    </div>
    
    : noFavorites() 
   
}

export default Favorites
