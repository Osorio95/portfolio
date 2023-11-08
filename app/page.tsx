'use client'
import { useState } from "react"
import About from "@/components/about"
import Focus from "@/components/focus"
import Footer from "@/components/footer"
import MainHeader from "@/components/header"
import Hero from "@/components/hero"
import SelectedCases from "@/components/selected-cases"
import Skills from "@/components/skills"
import { links } from "@/components/route/route"
import Link from "next/link"
import Text from "@/components/ui/text"

const Home = () => {
	const [mobileNavbar, setMobileNavbar] = useState<boolean>(false)


	return (
		<main className="relative flex flex-col gap-24 xl:gap-40 bg-custom-black text-custom-white px-4 sm:px-10 md:px-16 lg:px-24 xl:px-36 overflow-hidden">
			<MainHeader mobileNavbar={mobileNavbar} setMobileNavbar={setMobileNavbar} />
			<Hero />
			<About />
			<Focus />
			<Skills />
			{/* <SelectedCases /> */}
			<div className="bg-custom-white h-2 -mx-64"></div>
			<Footer />
			{mobileNavbar &&
				<div className="absolute top-0 bottom-0 right-0 left-0 bg-custom-white p-8 pt-24 flex flex-col gap-4 items-center">
					{links.map((link, idx) =>
						<Link key={idx} href={link.href} className="z-50">
							<Text variant='lato-2' className='font-lato text-custom-black'>
								{link.name}
							</Text>
						</Link>
					)}
				</div>
			}
		</main>
	)
}

export default Home
