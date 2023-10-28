'use client'
import React from 'react'
import classNames from 'classnames'

type Props = {
    children: string
    callback?: () => void
    color?: string
}

const Button = ({ children, callback = () => {}, color }: Props) => {
    return (
        <button className={classNames('rounded-3xl w-fit px-3 py-1', color)} onClick={() => callback()}>
            {children}
        </button>
    )
}

export default Button