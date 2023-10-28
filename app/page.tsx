import About from "@/components/about"
import MainHeader from "@/components/header"
import Hero from "@/components/hero"

const Home = () => {
	return (
		<main className="dark:bg-night text-white font-mono px-8 sm:px-10 md:px-16 lg:px-24 xl:px-36">
			<MainHeader />
			<Hero />
			<About />
		</main>
	)
}

export default Home
