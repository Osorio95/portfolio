import React from 'react'
import Text from "@/components/ui/text"
import Image from "next/image"
import Slider from 'react-slick'

import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

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
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: false,
        cssEase: 'linear'
    }

    return (
        <section className="w-full">
            <div className="flex flex-col gap-8">
                <Text variant="h1">
                    My skills
                </Text>
                <Text>
                    Part of the stack that I&apos;m familiar with
                </Text>
            </div>
            <div className="relative">
                <Slider {...settings} >
                    {techStack.map((element) =>
                        <SkillElement image={element.path} text={element.name} />
                    )}
                </Slider>
                <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-night to-night/0 w-16 z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-night to-night/0 w-16 z-10 pointer-events-none"></div>
            </div>
        </section>
    )
}

export default Skills