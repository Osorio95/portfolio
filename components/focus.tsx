import React from 'react'
import Text from './ui/text'

const Focus = () => {

    const texts = [
        {
            title: "Passionate about delivering high-quality software:",
            text: "I'm passionate about delivering top-notch software throughout the entire software development life-cycle. I strive to create software that's not just functional, but also user-friendly and efficient."
        },
        {
            title: "Expertise in Scrum methodology:",
            text: "I'm experienced in transforming requirements and key features into a Scrum backlog. I have the expertise to implement continuous integration and deployment, and swiftly release work in an enterprise setting."
        },
        {
            title: "Problem-solving skills:",
            text: "I'm adept at troubleshooting and problem-solving, handling both technical and non-technical issues. I've leveraged these skills to support production environments, debug intricate technical bugs, and devise innovative tech solutions."
        }
    ]

    return (
        <section className="flex flex-col items-center gap-8">
            <Text variant='tusker-3'>
                My focus
            </Text>
            <div className='flex flex-col xl:grid xl:grid-cols-12 gap-16'>
                {texts.map((text, idx) =>
                    <div key={idx} className='col-span-4'>
                        <Text variant='playfair-1'>
                            {text.title}
                        </Text>
                        <br />
                        <Text variant='lato-3' className='text-justify'>
                            {text.text}
                        </Text>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Focus