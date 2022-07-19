import React, { useReducer, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Chicken from './models/chicken'


type ChickenType = {
  id: string
  name: string
  age: number
  weight: number
  getWeight(): number
}

type ChickenFormProps = {

}

type ChickenFormState = {
  id: string
  name: string
  age: number
  weight: number
}



const initialState = {
  chickens: [
    new Chicken("1", "Chicken 1", 1, 1),
    new Chicken("2", "Chicken 2", 2, 2),
    new Chicken("3", "Chicken 3", 3, 3),
  ]
}




console.log("initialState", initialState)

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_CHICKEN':
      return {
        ...state,
        chickens: [...state.chickens, action.payload]
      }
    case 'REMOVE_CHICKEN':
      return {
        ...state,
        chickens: state.chickens.filter((chicken: any) => chicken.id !== action.payload)
      }
    default:
      return state
  }
}



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log("state", state)

  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>

      <div className="chicken-form">
        <ChickenForm />
        <div>
          <div>
            <h2>Chickens</h2>
            <ChickenList />
          </div>

        </div>
      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <nav className="navbar__wraper">
      <ul className="navbar">
        <li >
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">ToDo List</a>
        </li>
      </ul>
    </nav>
  )
}

const ChickenList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="chicken-list">
      <ul>
        {state.chickens.map((chicken: any) => {
          return (
            <li key={chicken.id}>
              <span>{chicken.name}</span>
              <span>{chicken.age}</span>
              <span>{chicken.weight}</span>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}


const ChickenForm: React.FC<ChickenFormProps> = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)


  const handleSubmit = (e: any) => {
    e.preventDefault()



    const id = Math.random().toString()

    const nameRef = nameInput.current.value || name
    const ageRef = ageInput.current.value || age
    const weightRef = weightInput.current.value || weight

    const chicken: ChickenFormState = new Chicken(id, nameRef, ageRef, weightRef)


    // console.log("id", id),
    console.log("chicken", chicken)




    // const chicken = new Chicken(id, name, age, weight)






    // console.log("e.target.elements", chicken)

    dispatch({ type: 'ADD_CHICKEN', chicken })

  }

  const nameInput = useRef<any>(null) // useRef is a hook that lets you refer to DOM nodes so you can attach event listeners to them.
  const ageInput = useRef<any>(null)
  const weightInput = useRef<any>(null)

  const inputHandler = (e: any) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'age':
        setAge(e.target.value)
        break
      case 'weight':
        setWeight(e.target.value)
        break
      default:
        break
    }
  }



  return (
    <div className="chicken-form">
      <form >
        <label>
          Name:
          <input type="text" ref={nameInput} onChange={inputHandler} />
        </label>
        <label>
          Age:
          <input type="text" ref={ageInput} /// <reference path="" />
            onChange={inputHandler} />
        </label>
        <label>
          Weight:
          <input type="text" ref={weightInput} onChange={inputHandler} />
        </label>
        <div className="button-wrapper">

          <button type="submit" onClick={handleSubmit}>Add</button>
        </div>
      </form>
    </div>
  )
}








export default App
