import React from 'react'
import Text from './ui/text'
import Slider from 'react-slick'

const SelectedCases = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    }

    const projects = [
        { title: '', description: '', image: '' },
        { title: '', description: '', image: '' }
    ]

    return (
        <section className='flex flex-col'>
            <Text variant='tusker-3'>
                Selected Cases
            </Text>

            <Slider {...settings}>
                {projects.map(project => (
                    <div className="">
                        <div className='flex justify-center items-center w-full h-[256px]'>
                            <div className="grid grid-cols-8 w-full">
                                <div className="col-start-2 col-span-4 flex flex-col">
                                    <Text variant='playfair-1'>
                                        {project.title}
                                        hi
                                    </Text>
                                    <Text variant='lato-3'>
                                        {project.description}
                                        hi
                                    </Text>
                                </div>
                                <div className="col-span-2">
                                    <div className="bg-neutral-50 p-8">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default SelectedCases