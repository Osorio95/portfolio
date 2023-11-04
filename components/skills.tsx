import React from 'react'
import Text from "@/components/ui/text"
import Slider from 'react-slick'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillElement from './skill-element'

const Skills = () => {

    const techStack = [
        { name: "HTML", path: '/images/stack_svg/html.svg' },
        { name: "CSS", path: '/images/stack_svg/css.svg' },
        { name: "Javascript", path: '/images/stack_svg/js.svg' },
        { name: "Typescript", path: '/images/stack_svg/ts.svg' },
        { name: "Tailwind", path: '/images/stack_svg/tw.svg' },
        { name: "React", path: '/images/stack_svg/react.svg' },
        { name: "Vue", path: '/images/stack_svg/vue.svg' },
        { name: "Svelte", path: '/images/stack_svg/svelte.svg' },
        { name: "Next", path: '/images/stack_svg/next.svg' },
        { name: "Nuxt", path: '/images/stack_svg/nuxt.svg' },
        { name: "Vite", path: '/images/stack_svg/vite.svg' },
        { name: "Git", path: '/images/stack_svg/git.svg' },
        { name: "VS Code", path: '/images/stack_svg/vscode.svg' },
        { name: "Node.js", path: '/images/stack_svg/node.svg' },
        { name: "Docker", path: '/images/stack_svg/docker.svg' },
        { name: "Ubuntu", path: '/images/stack_svg/ubuntu.svg' },
    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 9000,
        autoplay: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        pauseOnHover: false,
        cssEase: 'linear'
    }

    return (
        <section className="w-full">
            <Text variant="playfair-1">
                Proficient in key components of the Technology Stack
            </Text>
            <div className="relative -mx-64 my-32">
                <div className="-z-10 bg-custom-white opacity-25 translate-y-12 -rotate-6">
                    <Slider {...settings} >
                        {techStack.map((element, idx) =>
                            <SkillElement key={idx} image={element.path} text={element.name} />
                        )}
                    </Slider>
                </div>
                <div className="z-20 bg-custom-white rotate-6">
                    <Slider {...settings} >
                        {techStack.reverse().map((element, idx) =>
                            <SkillElement key={idx} image={element.path} text={element.name} />
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Skills