import { useReducer } from 'react'

import './App.css'
import Chicken from './models/chicken'
import { Routes, Route } from "react-router-dom"
import TsPractice from './components/tsPractice'

import NavBar from './components/navigation/navbar'
import Home from './pages/homePage'
import ChickenForm from './components/chicken/chicken-form'


type ChickenType = {
  id: string
  name: string
  age: number
  weight: number
  getWeight(): number
}



const initialState = {
  chickens: [
    new Chicken("1", "Chicken 1", 1, 1),
    new Chicken("2", "Chicken 2", 2, 2),
    new Chicken("3", "Chicken 3", 3, 3),
  ] as ChickenType[],
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
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/chicken-form' element={<ChickenForm chickenReducer={state} dispatchReducer={dispatch} />} />
        {/* <Route path="/" element={<ChickenDetails />} /> */}
        <Route path="ts" element={<TsPractice />} />


      </Routes>





    </div>
  )
}
















export default App
