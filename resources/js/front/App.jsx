import { useState } from 'react'
import './App.scss'
import LeftMenu from './LeftMenu'
import MainContent from './MainContent'

function App() {

  return (
    <div className="app">
      
      <LeftMenu />
      <MainContent />
      
    </div>
  )
}

export default App
