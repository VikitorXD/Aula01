import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './componentes/Menu'
import Ropdape from './componentes/Rodape'


 function App() {
  return(
    <>
      <Menu/>
      <Outlet/>
      <Ropdape/>
    </>
  )
}

export default App;
