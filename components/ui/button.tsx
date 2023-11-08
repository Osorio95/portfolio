'use client'
import React from 'react'
import classNames from 'classnames'

type Props = {
    children: React.ReactNode
    className?: string
    callback?: () => void
    variant: 'transparent' | 'filled'
}

const Button = ({ children, className = "", callback = () => { }, variant }: Props) => {

    const newClassNames = classNames('border-2 border-custom-white py-2 px-8', className)

    const variants = {
        transparent: 'bg-transparent',
        filled: 'bg-custom-white'
    }

    return (
        <button className={classNames(variants[variant], newClassNames)} onClick={() => callback()}>
            {children}
        </button>
    )
}

export default Button