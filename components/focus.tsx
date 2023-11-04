import React from 'react'
import Text from './ui/text'

const Focus = () => {

    const texts = [
        {
            title: "Passionate about delivering high-quality software:",
            text: "I&apos;m passionate about delivering top-notch software throughout the entire software development life-cycle. I strive to create software that&apos;s not just functional, but also user-friendly and efficient."
        },
        {
            title: "Expertise in Scrum methodology:",
            text: "I&apos;m experienced in transforming requirements and key features into a Scrum backlog. I have the expertise to implement continuous integration and deployment, and swiftly release work in an enterprise setting."
        },
        {
            title: "Problem-solving skills:",
            text: "I&apos;m adept at troubleshooting and problem-solving, handling both technical and non-technical issues. I&apos;ve leveraged these skills to support production environments, debug intricate technical bugs, and devise innovative tech solutions."
        }
    ]

    return (
        <section className="flex flex-col items-center gap-8">
            <Text variant='tusker-3'>
                My focus
            </Text>
            <ul className='grid grid-cols-12 gap-16'>
                {texts.map((text, idx) =>
                    <li key={idx} className='col-span-4'>
                        <Text variant='playfair-1'>
                            {text.title}
                        </Text>
                        <br />
                        <Text variant='lato-3' className='text-justify'>
                            {text.text}
                        </Text>
                    </li>)}
            </ul>
        </section>
    )
}

export default Focus