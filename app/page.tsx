'use client'
import About from "@/components/about"
import MainHeader from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"

const Home = () => {

	return (
		<main className="flex flex-col gap-40 dark:bg-night text-white px-8 pb-24 sm:px-10 md:px-16 lg:px-24 xl:px-36">
			<MainHeader />
			<Hero />
			<About />
			<Skills />
		</main>
	)
}

export default Home
