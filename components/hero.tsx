import React from 'react'
import Text from './ui/text'
import Button from './ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id="header" className="w-full flex justify-between pt-48">
            <div className="flex flex-col justify-center">
                <Text className="text-4xl font-extrabold" variant="h2">
                    Hi 😁,
                </Text>
                <Text className="text-8xl font-extrabold text-emerald" variant="h1">
                    I&apos;m
                    <br />
                    David Osorio
                </Text>
                <Text className="text-4xl font-extrabold my-6" variant="h2">
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
            <div className='relative flex flex-col'>
                <Image className='drop-shadow-xl' width={512} height={512} alt='David Osorio' src={'/images/image.png'} />
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-night to-night/5 "></div>
            </div>
        </section>
    )
}

export default Hero