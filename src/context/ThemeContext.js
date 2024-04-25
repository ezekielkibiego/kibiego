import { createContext, useState } from "react";
// import PropTypes from 'prop-types'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    );

}

// ThemeProvider.propTypes = {
//     children: PropTypes.node.isProvided
// };


export {
    ThemeProvider,
    ThemeContext
}
