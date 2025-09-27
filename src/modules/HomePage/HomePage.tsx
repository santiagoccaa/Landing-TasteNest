import { Container } from "@/components/UI"
import { About, Hero } from "./components"
import { AboutCard } from "./components/AboutCard"

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Container>
                <About />
                <AboutCard />
            </Container>
        </>
    )
}
