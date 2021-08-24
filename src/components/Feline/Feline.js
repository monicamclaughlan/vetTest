import React from 'react'
import {Link} from 'react-router-dom'
import {RiHeartAddFill} from 'react-icons/ri'
import './Feline.css'

const Feline = ({tests, addToFavorites, filteredTests, setFilteredTests}) => {
    const result = filteredTests.filter(test => test.species === "Feline")
    const feline = result.map((test, index) => { 
        return ( 
            <div className="feline-test" key={index}>
                <Link to={`/feline/${test.id}`} onClick={() => setFilteredTests(tests)}><button className="test-title">{test.title}</button></Link>
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
        <div className="feline-list">
            <h2>Choose Your Test</h2>
            <form>
                <input
                onChange={handleChange}
                type="text"
                placeholder="Search tests..."
                />
            </form>
        
        
            {feline}
            
        </div>
        
    )
}

export default Feline
