import { Container } from "@/components/UI"
import { Footer } from "../HomePage/components"
import { Delivering, Hero, Team } from "./components"

export const AboutPage = () => {
    return (
        <>
            <Container >
                <Hero />
                <Delivering />
                <Team />
            </Container>
            <div className="bg-white">
                <Container>
                    <Footer />
                </Container>
            </div>
        </>
    )
}

