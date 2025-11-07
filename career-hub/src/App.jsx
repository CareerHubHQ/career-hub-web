
import { useEffect } from 'react'
import { Routes, Route } from 'react-router'


import { SignUpPage } from './pages/sign-up/signup-page'
import TestPage from './pages/test-components-page'

function App() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add("light")    
  }, [])

  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/tests" element={<TestPage/>} />
      </Routes>
    </>
  )
}

export default App
