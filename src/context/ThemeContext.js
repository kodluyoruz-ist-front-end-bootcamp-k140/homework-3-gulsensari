import {createContext, useState, useEffect} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ( {children} ) => {

//localStorage da bir şey yoksa light olarak dönecek.
const [theme, setTheme] = useState(localStorage.getItem('themeKey') || 'bg-light');

//Tema her değitiğinde yeniden render edecek.
useEffect(() => {
    localStorage.setItem('themeKey', theme)
}, [theme])


const value = {
    theme,
    setTheme,
}

return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
)
}

export default ThemeContext;











