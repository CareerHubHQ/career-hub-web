
import { useEffect } from "react"
import { Routes, Route } from "react-router"

import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"

function App() {
    useEffect(() => {
        const root = document.documentElement
        root.classList.add("light")    
    }, [])

    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        </>
    )
}

export default App
