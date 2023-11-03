import React from 'react';
import classNames from 'classnames'; // Necesitarás la librería 'classnames'

type Props = {
    variant?: 'h1' | 'h2' | 'p'
    children: React.ReactNode
    className?: string
}

const Text = ({ variant = 'p', children, className }: Props) => {
    const Component = variant;

    const variantClasses = {
        h1: 'text-7xl font-extrabold',
        h2: 'text-4xl',
        p: 'text-md',
    };

    const combinedClassName = classNames(variantClasses[variant], className);

    return (
        <Component className={combinedClassName}>
            {children}
        </Component>
    )
};

export default Text;
