import { Container } from "@/components/UI"
import { About, Categories, DiscoverMenu, DishSpecial, FeatureDishes, Footer, Hero, Ordering, ReserveTable, Social, Testimonials } from "./components"
import { AboutCard } from "./components/AboutCard"
import ModalTable from "@/components/Modal/ModalTable"

export const HomePage = () => {
    return (
        <>
        <ModalTable />
            <Hero />
            <Container>
                <About />
                <AboutCard />
                <Categories />
                <DishSpecial />
                <DiscoverMenu />
                <ReserveTable />
            </Container>
            <div className='bg-secondary my-16 py-16'>
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
            <div className='bg-secondary mt-16 pt-16 pb-4'>
                <Container>
                    <Footer />
                </Container>
            </div>
        </>
    )
}
