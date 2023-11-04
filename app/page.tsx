'use client'
import About from "@/components/about"
import Focus from "@/components/focus"
import Footer from "@/components/footer"
import MainHeader from "@/components/header"
import Hero from "@/components/hero"
import SelectedCases from "@/components/selected-cases"
import Skills from "@/components/skills"

const Home = () => {

	return (
		<main className="relative flex flex-col gap-40 dark:bg-custom-black text-custom-white px-8 sm:px-10 md:px-16 lg:px-24 xl:px-36 overflow-hidden">
			<MainHeader />
			<Hero />
			<About />
			<Focus />
			<Skills />
			<SelectedCases />
			<div className="bg-custom-white h-2 -mx-64"></div>
			<Footer />
		</main>
	)
}

export default Home
