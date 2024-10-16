import React from 'react'
import ContextProvider from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <ContextProvider>
    <h1>Context API</h1>
    <Login/>
    <Profile/>
    </ContextProvider>
  )
}

export default App
