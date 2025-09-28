import { Container } from "@/components/UI"
import { About, Categories, DiscoverMenu, DishSpecial, FeatureDishes, Hero, ReserveTable, Testimonials } from "./components"
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
                <ReserveTable />
            </Container>
            <FeatureDishes />
            <Container>
                <Testimonials />
            </Container>
        </>
    )
}
