import React from 'react'
import Text from './ui/text'
import Button from './ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id="header" className="w-full h-screen justify-between flex pt-48">
            <div className="flex flex-col">
                <Text className="text-4xl font-extrabold" type="title_1">
                    Hi 😊,
                </Text>
                <Text className="text-8xl font-extrabold text-emerald" type="title_1">
                    I'm
                    <br />
                    David Osorio
                </Text>
                <Text className="text-4xl font-extrabold my-6" type="title_1">
                    React, Vue, Svelte
                    <br />
                    Web developer
                </Text>
                <div className="flex flex-col gap-4">
                    <Button color="bg-lavender text-night">
                        Contact me
                    </Button>
                    <Button color="bg-powder_blue text-night">
                        Download resume
                    </Button>
                </div>
            </div>
            <div className='flex flex-col'>
                <Image className='drop-shadow-xl' width={440} height={440} alt='David Osorio' src={'/images/image.png'} />
            </div>
        </section>
    )
}

export default Hero