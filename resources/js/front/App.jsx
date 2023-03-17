import { useState } from 'react'
import './App.scss'
import LeftMenu from './LeftMenu'
import MainContent from './MainContent'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        
        <LeftMenu/>
        <MainContent/>
        
      </div>
    </BrowserRouter>
  )
}

export default App
