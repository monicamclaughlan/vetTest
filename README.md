# Project Overview

## Project Links

- [gitHub Repository Frontend](https://github.com/monicamclaughlan/vetTest)
- [gitHub Repository Backend]()
- [live site link Frontend]()
- [deployed link Backend]()

## Project Description

My capstone project will provide an application that allows veterinary staff to quickly find a test protocol for their patient.  This will provide them with the information that they need to run the test efficiently, such as blood tube type, sample type, test protocol and time it takes to get test results from the laboratory.  The user will also be able to save favorite tests to allow even faster access when needed.  

## API

I will create my own API using PostegeSQL and will connect to this API with PHP/Laravel.


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile Wireframe](https://www.figma.com/file/xGK6RSM7KjqxYdO2cHWhZG/vetTest?node-id=0%3A1)
- [React Architecture](https://www.figma.com/file/uN1LaNW7B8lpvgy3dTHAtb/React-vetTest?node-id=0%3A1)
- [Notion](https://www.notion.so/GA-Unit-4-Capstone-71f6f291ac024ab7996ee096268d97e1)

### MVP/PostMVP 

#### MVP 

- Create API that will hold test information
- Make a call to the API that will retrieve test names and allow the user to choose a test based on species, canine or feline.  
- Create Form to allow the user to search through tests
- Create a second call that will retrieve test information
- Allow user to interact with the page and create a test favorites page

#### PostMVP 

- Add User model to create profile and login information with authentication

## Components


| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router, contain Canine and Feline Components |
| Canine    |          Contain list of canine tests                         |
| Feline    |          Contain list of feline tests                         |
| Footer    |          This will render the nav bar with link to homepage   |
| Header    |          This will allow the user to get to their favorites page  |
| Test      |          This will contain information about individual test  |
| Favorites |          This will contain list of favorite tests             |
|Search Form|          Able to search by test name                          |


- [Time-Priority Matrix](https://docs.google.com/spreadsheets/d/16aDWGDzB2D1AZdw1CxAAtfeCEYMYQ9sKih-R3A2aB9c/edit#gid=417043777)

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Project Planning |    H     |      6hrs      |     8hrs        |      8hrs    |
| Create react app |    H     |      1hr       |     2hrs        |      2hrs    |
| Set up Routes    |    H     |      1hrs      |     1hrs        |      1hrs    |
| Header           |    H     |      1hrs      |     1hrs        |      1hrs    |
| Footer           |    H     |      1hrs      |     1hrs        |      1hrs    |
| Canine           |    H     |      3hrs      |     3hrs        |   3hrs       |
| Feline           |    H     |      3hrs      |     3hrs        |   3hrs       |
| Test             |    H     |      3hrs      |     2hrs        |   2hrs       |
| Favorites        |    H     |      3hrs      |     2hrs        |   2hrs       |
| Search Form      |    H     |      3hrs      |     1hrs        |   1hrs      |
| Creating API     |    H     |      6hrs      |     6hrs        |   6hrs       |
| Learning PHP     |    H     |      10hrs     |     10hrs        |   10hrs       | 
| Using Laravel    |    H     |      5hrs      |     4hrs        |   4hrs       |
| Style Components |    H     |      4hrs      |     4hrs        |     4hrs     |
| User model/auth  |    L     |      10hrs     |     hrs        |    hrs      |
| Total            |    H     |      60hrs     |     hrs        |    hrs      |



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
    const handleChange = (e) => {
        e.preventDefault();
        setFilteredTests(tests.filter(t => t.title.toLowerCase().includes(e.target.value.toLowerCase()) ))
      }
```

```
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
```    



