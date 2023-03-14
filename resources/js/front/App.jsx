import { useState } from 'react'
import './App.scss'
import LeftMenu from './LeftMenu'
import MainContent from './MainContent'

function App() {

  const [content, setContent] = useState('')

  return (
    <div className="app">
      
      <LeftMenu content={content} setContent={setContent}/>
      <MainContent content={content}/>
      
    </div>
  )
}

export default App
