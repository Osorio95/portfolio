import React from 'react'
import Text from './ui/text'

const About = () => {
    return (
        <section className='h-screen flex flex-col gap-24'>
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <Text className="text-7xl font-extrabold opacity-25" type="title_1">
                        <span className='text-emerald'> Web </span> dev
                        <span className='text-emerald'> Web </span> dev
                        <span className='text-emerald'> Web </span> dev
                        <span className='text-emerald'> Web </span> dev
                    </Text>
                </div>
                <div className="col-span-8 flex flex-col gap-8">
                    <Text className='text-6xl'>
                        About me
                    </Text>
                    <Text >
                        I am a self-taught front-end developer with 3 years of experience working closely with UX/UI designers and software engineers on demanding projects. My experience has taught me a lot, and I am always looking for new information to stay up-to-date with the latest trends and best practices. I am committed to delivering the best possible results for my clients.

                        In my free time, I enjoy playing video games, from modding to immersing myself in complex challenges. I am always up for a challenge! I also enjoy bringing small projects to life, such as Pokédexes, small CRUD apps, and others.
                    </Text>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-8 flex flex-col gap-8">
                    <Text className='text-6xl'>
                        My focus
                    </Text>

                    <ul>
                        <li>
                            Passionate about delivering high-quality software: I am passionate about delivering high-quality software through the full software development life-cycle. I believe in creating software that is not only functional but also user-friendly and efficient. I am committed to learning a broad range of skills to meet the requirements of any project.
                        </li>
                        <li>
                            Expertise in Scrum methodology: I have experience in converting requirements and major features into a Scrum backlog. I am skilled in implementing continuous integration and deployment, and quickly releasing work in an enterprise environment.
                        </li>
                        <li>
                            Problem-solving skills: I excel at troubleshooting and problem solving, including technical and non-technical problems. I have used these talents to support production environments, debug complex technical bugs, and identify innovative technical solutions.
                        </li>
                    </ul>
                </div>
                <div className="col-span-4">
                    <Text className="text-7xl font-extrabold opacity-25" type="title_1">

                    </Text>
                </div>
            </div>
        </section>
    )
}

export default About