
import './App.css'

import React from 'react'
import { UserProvider } from './UserContext'
import User from './User'

function App() {
  return (
    <UserProvider>
      <User></User>
    </UserProvider>
  )
}

export default App