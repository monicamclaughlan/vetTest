import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const FelineTestDetails = ({match, test, setTest}) => {
    const {
        params: { id },
      } = match;

      const url = `https://vettest.herokuapp.com/api/tests/`

      const getTest = () => { 
        fetch(`${url}${id}`)
        .then((response) => response.json())
        .then((data) => { 
          setTest(data)
          console.log(data)
        })
      }

      useEffect(() => { 
        getTest()
      }, [])


     
        return (
            <div className="test-details-page">
            <Link to="/feline" >Back to Tests</Link>
            <div className="test-details">
                
                <h1>{test.title}</h1>
                <hr/>
                <p>Sample type: {test.sample}</p>
                <p>Tube type: {test.tube}</p>
                <p>Test Protocol: {test.protocol}</p>
                <p>Test code: {test.code}</p>
                <p>Test cost: {test.amount}</p>
                <p>Turnaround time: {test.frequency}</p>
            </div>
            </div>
        )
}

export default FelineTestDetails
