import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/' },
        { name: 'Skills', href: '/' },
        { name: 'Projects', href: '/' },
        { name: 'Why me?', href: '/' }
    ]

    return (
        <nav className='flex bg-night-600 border-solid border-2 border-night-700 bg-opacity-50 border-opacity-50 rounded-3xl p-1'>
            <ul className='flex flex-row justify-center gap-2'>
                {links.map((link, idx) =>
                    <li key={idx} className='px-8 py-1'>
                        <Link href={link.href}>
                            {link.name}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar