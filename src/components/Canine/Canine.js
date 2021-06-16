import React from 'react'
import { Link } from "react-router-dom"
import {RiHeartAddFill} from 'react-icons/ri'
import './Canine.css'


const Canine = ({tests, addToFavorites, filteredTests, setFilteredTests}) => {

    const result = filteredTests.filter(test => test.species === "Canine")
    const canine = result.map((test, index) => { 
        return ( 
            <div className="canine-test" key={index}>
                <Link to={`/canine/${test.id}`} ><button className="test-title">{test.title}</button></Link>
                <button className="favorite" onClick={() => {
                    addToFavorites(test)
                    test.favorite = true}}>
                        <RiHeartAddFill color={test.favorite ? "red":"lightblue"}/></button>
            </div>
        )
    })

    const handleChange = (e) => {
        e.preventDefault();
        setFilteredTests(tests.filter(t => t.title.toLowerCase().includes(e.target.value.toLowerCase()) ))
      }

    return (
        <div className="canine-list">
            <h2>Choose Your Test</h2>
            <form>
                    <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Search tests..."
                    />
            </form>
            
        
            {canine}
            
        
        </div>
    )
}

export default Canine
