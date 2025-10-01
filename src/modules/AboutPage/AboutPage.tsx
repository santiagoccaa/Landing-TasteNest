import { Container } from "@/components/UI"
import { Footer } from "../HomePage/components"
import { Delivering, FAQAbout, Hero, RestauranFamily, Team } from "./components"

export const AboutPage = () => {
    return (
        <>
            <Container >
                <Hero />
                <Delivering />
            </Container>
            <RestauranFamily />
            <Container>
                <Team />
                <FAQAbout />
            </Container>
            <div className="bg-secondary">
                <Container>
                    <Footer />
                </Container>
            </div>
        </>
    )
}

