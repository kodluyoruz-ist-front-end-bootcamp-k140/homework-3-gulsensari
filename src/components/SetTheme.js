import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


function SetTheme() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <button className={theme === "bg-light" ? 'btn btn-transparent me-3 ms-3' : 'btn btn-dark me-3 ms-3'}
                onClick={() => setTheme(theme === "bg-light" ? "bg-dark" : "bg-light")}>
                {theme === "bg-light" ? "🌞  Light " : "🌙  Dark"}
            </button>
            
        </>
    )
}

export default SetTheme