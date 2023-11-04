import React from 'react'
import Text from './ui/text'
import Button from './ui/button'

const Hero = () => {
    return (
        <section id="header" className="w-full grid grid-cols-12 pt-24">
            <div className="col-span-9">
                <div className="flex flex-row items-center">
                    <Text variant='tusker-1'>
                        FRONT
                    </Text>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M7.61493 46.4269L46.6149 7.42691" stroke="#C8C8C8" strokeWidth="20" />
                    </svg>
                    <Text variant='tusker-1'>
                        END
                    </Text>
                </div>
                <Text className='-mt-16 -mb-6' variant='tusker-1'>
                    DEVELOPER
                </Text>
            </div>
            <div className="col-span-3 self-end">
                <Text className='text-right' variant='playfair-1'>
                    I&apos;m David Osorio
                    <br />
                    React, Vue & SvelteWeb
                    <br />
                    developer
                </Text>
            </div>
            <div className="col-span-12 mt-12">
                <Button variant='transparent'>
                    <Text variant='lato-1'>
                        Contact me
                    </Text>
                </Button>
            </div>
        </section>
    )
}

export default Hero