import Image from 'next/image'
import React from 'react'
import Text from './ui/text'

type Props = {
    image: string
    text: string
}

const SkillElement = ({ image, text }: Props) => {
    return (
        <div className="flex items-center justify-center py-4 gap-4 w-fit transition-colors duration-200 ease-in">
            {/* <div className="w-12 h-12 flex items-center justify-center">
                <Image className='drop-shadow-lg' width={96} height={96} src={image} alt="an icon" />
            </div> */}
            <Text className='text-center text-black text-3xl'>
                {text}
            </Text>
        </div>
    )
}

export default SkillElement