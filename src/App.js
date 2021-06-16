import React, {useState, useEffect} from 'react'
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Canine from './components/Canine/Canine'
import Feline from './components/Feline/Feline'
import Splash from './components/Splash/Splash'
import TestDetails from './components/Canine/TestDetails';
import FelineTestDetails from './components/Feline/FelineTestDetails'
import Favorites from './components/Favorites/Favorites'

function App() {

  const url = "https://vettest.herokuapp.com"

  //Create state to hold all of the tests
  const [tests, setTests] = useState([])
  const [filteredTests, setFilteredTests] = useState([])
  const [test, setTest] = useState([])
  const [favorites, setFavorites] = useState([])

  const emptyTest = { 
    sample: "", 
    tube: "", 
    protocol: "", 
    code: "", 
    amount: 0.00, 
    frequency: "", 
    title: "", 
    species: "", 
    favorite: false
  }

   //function to get all the tests 
   const getTests = () => { 
    fetch(url + '/api/tests')
    .then((response) => response.json())
    .then((data) => { 
      setTests(data)
      setFilteredTests(data)
      console.log(data)
    })
  }

   // when screen loads, get list of all tests
   useEffect(() => { 
    getTests()
  }, [])

  const addToFavorites = (test) => { 
    setFavorites([...favorites, test])
  }

  const removeFromFavorites = (index) => setFavorites(favorites.filter((currentValue,currentIndex) => currentIndex !== index))

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
            <Route exact path='/' render={(rp) => <Splash {...rp} />} />
            <Route exact path='/canine' render={(rp) => <Canine {...rp} tests={tests} filteredTests={filteredTests} setTest={setTest} setFilteredTests={setFilteredTests} addToFavorites={addToFavorites}/>}/>
            <Route exact path='/feline' render={(rp) => <Feline {...rp} tests={tests} filteredTests={filteredTests} setFilteredTests={setFilteredTests} addToFavorites={addToFavorites}/>}/>
            <Route exact path='/canine/:id' render={(rp) => <TestDetails {...rp} test={test} setTest={setTest}/>}/>
            <Route exact path='/feline/:id' render={(rp) => <FelineTestDetails {...rp} test={test} setTest={setTest}/>}/>
            <Route exact path='/favorites' render={(rp) => <Favorites {...rp} favorites={favorites} removeFromFavorites={removeFromFavorites}/>} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
      
        
    </div>
  );
}

export default App;
