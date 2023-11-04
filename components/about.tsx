import React from 'react'
import Text from './ui/text'

const About = () => {

    return (
        <section className='grid grid-cols-8'>
            <div className="col-start-2 col-span-4 flex flex-col gap-8">
                <Text variant='tusker-3'>
                    About me
                </Text>
                <Text className='uppercase' variant='lato-2' >
                    I am a self-taught front-end developer with 3 years of experience working closely with UX/UI designers and software engineers on demanding projects. My experience has taught me a lot, and I am always looking for new information to stay up-to-date with the latest trends and best practices. I am committed to delivering the best possible results for my clients.
                    <br />
                    <br />
                    In my free time, I enjoy playing video games, from modding to immersing myself in complex challenges. I am always up for a challenge! I also enjoy bringing small projects to life, such as Pokédexes, small CRUD apps, and others.
                </Text>
            </div>
        </section >
    )
}

export default About