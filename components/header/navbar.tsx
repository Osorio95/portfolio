'use client'
import React from 'react'
import Link from 'next/link'
import Text from '../ui/text'

type Props = {
    mobileNavbar: boolean
    setMobileNavbar: (bool: boolean) => void
}

const Navbar = ({ mobileNavbar, setMobileNavbar }: Props) => {
    const links = [
        { name: 'home', href: '/', target: "_self", icon: null },
        { name: 'resume', href: '/resources/cv_david_osorio.pdf', target: "_blank", icon: <span className="i-solar-square-top-down-line-duotone ml-2" /> }
    ]
    return (
        <>
            <nav className='hidden xl:flex flex-row justify-center pt-6 gap-8'>
                {links.map((link, idx) =>
                    <Link key={idx} href={link.href} target={link.target}>
                        <Text variant='lato-2' className='font-lato text-custom-white'>
                            {link.name}
                            {link.icon}
                        </Text>
                    </Link>
                )}
            </nav>
            <button className='z-50 md:hidden' onClick={() => setMobileNavbar(!mobileNavbar)}>
                {!mobileNavbar ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16" fill="none">
                        <path d="M0 2H32" stroke="#C8C8C8" stroke-width="3" />
                        <path d="M0 14H32" stroke="#C8C8C8" stroke-width="3" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
                        <path d="M1 2L25.5134 22.5692" stroke="#111111" stroke-width="3" />
                        <path d="M1 23L25.5134 2.4308" stroke="#111111" stroke-width="3" />
                    </svg>
                }
            </button>

        </>
    )
}

export default Navbar