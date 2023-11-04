import React from 'react'
import Link from 'next/link'
import Text from '../ui/text'

const Navbar = () => {
    const links = [
        { name: 'home', href: '/' },
        { name: 'resume', href: '/' }
    ]

    return (
        <nav className='flex flex-row justify-center gap-8'>
            {links.map((link, idx) =>
                <Link key={idx} href={link.href}>
                    <Text variant='lato-2' className='font-lato text-custom-white'>
                        {link.name}
                    </Text>
                </Link>
            )}
        </nav>
    )
}

export default Navbar