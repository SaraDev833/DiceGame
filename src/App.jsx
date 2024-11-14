import { useState } from 'react'

import './App.css'
import Main from './Components/Main/Main'
import Play from './Components/Play/Play';

function App() {
 const [playNow , setplayNow] = useState(false);
 const toggleButton = ()=>{
  setplayNow(!playNow);
 }
  return (
    <>
    {playNow? <Play/>: <Main toggle = {toggleButton}/>}

    </>
  )
}

export default App
