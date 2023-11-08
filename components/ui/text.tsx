import React from 'react';
import classNames from 'classnames';

type Variant =
    'tusker-1' |
    'tusker-2' |
    'tusker-3' |
    'tusker-4' |
    'playfair-1' |
    'playfair-2' |
    'lato-1' |
    'lato-2' |
    'lato-3'

type Props = {
    variant?: Variant
    children: React.ReactNode
    className?: string
}

type Comp = Record<Variant, { component: keyof JSX.IntrinsicElements, classes: string }>

const Text = ({ variant = 'lato-1', children, className }: Props) => {

    const variants: Comp = {
        'tusker-1': { component: 'h1', classes: 'font-tusker text-[74px] md:text-[186px] 2xl:text-[196px] font-bold uppercase' },
        'tusker-2': { component: 'h2', classes: 'font-tusker text-[40px] md:text-[124px] 2xl:text-[152px] font-bold uppercase' },
        'tusker-3': { component: 'h3', classes: 'font-tusker text-[36px] md:text-[56px] 2xl:text-[64px] font-bold uppercase' },
        'tusker-4': { component: 'h3', classes: 'font-tusker text-[16px] xl:text-[18px] font-bold uppercase' },
        'playfair-1': { component: 'h5', classes: 'font-playFair text-[20px] xl:text-[24px]' },
        'playfair-2': { component: 'h5', classes: 'font-playFair text-[18px] xl:text-[20px]' },
        'lato-1': { component: 'p', classes: 'font-lato text-[14px] xl:text-[24px]' },
        'lato-2': { component: 'p', classes: 'font-lato text-[12px] xl:text-[20px]' },
        'lato-3': { component: 'p', classes: 'font-lato text-[14px]' }
    };

    const Component = variants[variant].component;
    const variantClasses = variants[variant].classes;

    const combinedClassName = classNames(variantClasses, className);

    return (
        <Component className={combinedClassName}>
            {children}
        </Component>
    )
};

export default Text;
