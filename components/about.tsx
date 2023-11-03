import React from 'react'
import Text from './ui/text'

const About = () => {

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
        <section className='h-screen flex flex-col gap-40'>
            <div className="grid grid-cols-12">
                <div className="col-span-4 flex flex-col items-center justify-center">
                    <Text className="opacity-25 select-none" variant="h1">
                        <span className='text-emerald'> Web </span> dev
                        <span className='text-emerald'> Web </span> dev
                        <span className='text-emerald'> Web </span> dev
                        <span className='text-emerald'> Web </span> dev
                    </Text>
                </div>
                <div className="col-span-8 flex flex-col gap-8">
                    <Text className='text-6xl' variant='h1'>
                        About me
                    </Text>
                    <Text >
                        I am a self-taught front-end developer with 3 years of experience working closely with UX/UI designers and software engineers on demanding projects. My experience has taught me a lot, and I am always looking for new information to stay up-to-date with the latest trends and best practices. I am committed to delivering the best possible results for my clients.
                        <br />
                        <br />
                        In my free time, I enjoy playing video games, from modding to immersing myself in complex challenges. I am always up for a challenge! I also enjoy bringing small projects to life, such as Pokédexes, small CRUD apps, and others.
                    </Text>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <Text variant='h1'>
                    My focus
                </Text>
                <ul className='grid grid-cols-12 gap-16'>
                    {texts.map(text =>
                        <li className='col-span-4'>
                            <Text className='font-bold'>
                                {text.title}
                            </Text>
                            <br />
                            <Text className='text-justify'>
                                {text.text}
                            </Text>
                        </li>)}
                </ul>
            </div>
        </section >
    )
}

export default About