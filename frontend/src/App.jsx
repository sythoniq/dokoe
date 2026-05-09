import { useState } from 'react'
import { Outlet } from 'react-router'

import Nav from './components/nav/Nav.jsx'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
