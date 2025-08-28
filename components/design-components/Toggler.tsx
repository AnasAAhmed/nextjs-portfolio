'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [lightMode, setLightMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        // 👇 Default to dark if no theme is saved
        if (savedTheme === 'light') {
            setLightMode(true);
            document.documentElement.classList.add('light');
        } else if (savedTheme === 'dark') {
            setLightMode(false);
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleDarkMode = () => {
        if (lightMode) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }

        setLightMode(!lightMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            title={!lightMode ? 'Turn on light mode' : 'Turn on dark mode'}
            className="text-black cursor-pointer text-[22px] not-light:text-white"
        >
            {!lightMode ? <Image height={18} width={18} src="/sun.svg" alt="moon" /> : <Image height={18} width={18} src="/Moon.svg" alt="moon" />}
        </button>
    );
};

export default DarkModeToggle;