import React from 'react'
import { useTheme } from 'next-themes'

const DarkMode = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            {theme === "dark" ?
                <button className="px-2 py-1 flex items-center justify-center"
                    onClick={() => setTheme('light')}>
                    <span className="i-solar-sun-2-line-duotone hover:text-emerald transition-colors ease-linear w-6 h-6" />
                </button>
                :
                <button className="px-2 py-1 flex items-center justify-center"
                    onClick={() => setTheme('dark')}>
                    <span className="i-solar-cloudy-moon-bold-duotone hover:text-emerald transition-colors ease-linear w-6 h-6" />
                </button>
            }
        </>
    )
}

export default DarkMode