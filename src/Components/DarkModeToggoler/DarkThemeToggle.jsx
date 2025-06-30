import React from 'react';
import { useDarkMode } from '../../Context/ThemeContext';

const DarkThemeToggle = () => {

    const {darkMode, setDarkMode} = useDarkMode();

    return (
        <div onClick={() => setDarkMode(!darkMode)} className='btn btn-outline text-black hover:text-white dark:text-white'>
            {darkMode ? "🌞 light" : "🌙 Dark"}
        </div>
    );
};

export default DarkThemeToggle;