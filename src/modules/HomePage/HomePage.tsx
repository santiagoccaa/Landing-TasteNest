import { Container } from "@/components/UI"
import { About, Categories, DiscoverMenu, DishSpecial, Hero } from "./components"
import { AboutCard } from "./components/AboutCard"

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Container>
                <About />
                <AboutCard />
                <Categories />
                <DishSpecial />
                <DiscoverMenu />
            </Container>
        </>
    )
}
