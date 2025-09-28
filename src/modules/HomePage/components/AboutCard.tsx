import { Flex, Heading } from "@/components/UI"
import Image from "next/image"

const aboutItems = [
    {
        title: "Restaurant",
        img: "about_restaurant",
        mt: "",
    },
    {
        title: "Coctail Bar",
        img: "about_bar",
        mt: "mt-0 md:mt-12",
    },
    {
        title: "Private Dining",
        img: "about_dining",
        mt: "",
    },
]

export const AboutCard = () => {
    return (
        <Flex gap="10" direction="col" className="md:flex-row">
                {aboutItems.map(({ title, img, mt }, index) => (
                    <div
                        key={index}
                        className={`w-60 h-80 rounded-2xl p-2 pb-6 bg-black relative overflow-hidden group ${mt}`}
                    >
                        <Image
                            src={`/general/${img}.png`}
                            width={400}
                            height={400}
                            alt={`${title} option`}
                            className="w-full h-full absolute top-0 left-0 group-hover:scale-105 duration-500"
                        />
                        <div className="w-full h-full border-2 border-yellow rounded-2xl flex items-end relative">
                            <Flex className="w-full h-10 bg-yellow rounded-full absolute -bottom-5">
                                <Heading fs="lg">{title}</Heading>
                            </Flex>
                        </div>
                    </div>
                ))}
        </Flex>
    )
}
