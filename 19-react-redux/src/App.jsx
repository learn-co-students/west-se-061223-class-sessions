// import { useState } from 'react'
import Budget from './components/Budget'
import PetBrowser from './components/PetBrowser'
import DogBrowser from './components/DogBrowser'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Redux Shelter</h1>
        <Budget />
        <PetBrowser />
        <DogBrowser />
      </header>
    </div>
  )
}

export default App
