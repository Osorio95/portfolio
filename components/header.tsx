'use client'
import React from 'react'
import Navbar from './header/navbar'
import DarkMode from './header/darkmode'
import Text from './ui/text'

const MainHeader = () => {

    return (
        <header className='fixed left-0 right-0 pt-8 px-8 sm:px-10 md:px-16 lg:px-24 xl:px-36 z-50'>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-custom-black to-custom-black/0 -z-10"></div>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 h-fit">
                    <Text variant='tusker-4'>
                        David Osorio
                    </Text>
                    <Text variant='playfair-2'>
                        Front-end developer
                    </Text>
                </div>
                <Navbar />
                {/* <div className="absolute top-0 right-0 flex bg-night-600 border-solid border-2 border-night-700 bg-opacity-50 border-opacity-50 rounded-3xl p-1">
                    <span className='px-2 py-1'>
                        en
                    </span>
                    <DarkMode />
                </div> */}
            </div>
        </header >
    )
}

export default MainHeader