import { Container } from "@/components/UI"
import { About, Categories, DiscoverMenu, DishSpecial, FeatureDishes, Hero, Ordering, ReserveTable, Social, Testimonials } from "./components"
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
            <div className='bg-[#F5F8FD] my-16 py-16'>
                <Container>
                    <FeatureDishes />
                </Container>
            </div>
            <Container>
                <Testimonials />
            </Container>
            <Ordering />
            <Container>
                <Social />
            </Container>
        </>
    )
}
