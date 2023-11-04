import React from 'react'
import Text from './ui/text'
import Button from './ui/button'
import Link from 'next/link'

const Footer = () => {

    const buttons = [
        'Front-end development',
        'Technology',
        'Start up',
        'Gaming',
    ]

    const socials = [
        { name: 'github', url: 'https://github.com/Osorio95' },
        { name: 'linkedIn', url: 'https://www.linkedin.com/in/david-j-o-guti%C3%A9rrez-8b112410b/' },
        { name: 'twitter', url: 'https://twitter.com/David_lml' },
    ]

    return (
        <footer className='grid grid-cols-8'>
            <div className="col-span-4 flex flex-col -mt-12 pt-1">
                <Text variant='tusker-2'>
                    LET'S
                </Text>
                <Text className='-mt-16' variant='tusker-2'>
                    CONNECT!
                </Text>
            </div>
            <div className="col-span-4 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <Text variant='playfair-1'>
                        I'm always interested in
                    </Text>
                    <div className="flex flex-wrap gap-4">
                        {buttons.map(button => (
                            <Button variant='transparent'>
                                <Text variant='lato-2'>
                                    {button}
                                </Text>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center self-end gap-4 uppercase">
                    <Text variant='lato-2'>
                        I'm always interested in
                    </Text>
                    <Button variant='filled'>
                        <Text className='text-custom-black' variant='lato-2'>
                            Contact me
                        </Text>
                    </Button>
                </div>
                <div className="flex flex-wrap gap-8 self-end">
                    {socials.map(social => (
                        <Link href={social.url}>
                            <Text variant='lato-2' className='uppercase'>
                                {social.name}
                            </Text>
                        </Link >
                    ))}
                </div>
            </div>
            <div className="col-span-8 my-8 flex justify-between">
                <Text variant='lato-3'>
                    VALENCIA, VE
                </Text>
                <Text variant='lato-3'>
                    DAVID OSORIO 2023
                </Text>
            </div>
        </footer>
    )
}

export default Footer