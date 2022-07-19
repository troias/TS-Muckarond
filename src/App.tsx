import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>

      <div className="App">

        <div>

        </div>
      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <nav className="navbar__wraper">
      <ul className="navbar">
        <li className="navbar__item">
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

export default App
