import React from 'react';

type Props = {
    type?: 'title_1' | 'title_2'
    children: React.ReactNode
    className?: string
}

const Text = ({ type, children, className }: Props) => {
    switch (type) {
        case 'title_1':
            return <h1 className={className}>{children}</h1>;
        case 'title_2':
            return <h2 className={className}>{children}</h2>;
        // puedes agregar más casos si necesitas otros tipos de títulos
        default:
            return <p className={className}>{children}</p>; // por defecto se renderiza un párrafo
    }
};

export default Text;
