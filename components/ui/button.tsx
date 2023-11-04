'use client'
import React from 'react'
import classNames from 'classnames'

type Props = {
    children: React.ReactNode
    callback?: () => void
    variant: 'transparent' | 'filled'
}

const Button = ({ children, callback = () => { }, variant }: Props) => {

    const className = 'border-2 border-custom-white py-2 px-8'

    const variants = {
        transparent: 'bg-transparent',
        filled: 'bg-custom-white'
    }

    return (
        <button className={classNames(variants[variant], className)} onClick={() => callback()}>
            {children}
        </button>
    )
}

export default Button