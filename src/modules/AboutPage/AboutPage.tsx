import { Button, Flex, Heading, Text } from "@/components/UI"
import { FaCrown } from "react-icons/fa";
import Image from "next/image"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import { MdOutlineBrunchDining } from "react-icons/md";
import { LuHandPlatter } from "react-icons/lu";
import { GiCoolSpices } from "react-icons/gi";

const features = [
    {
        feat: "seasonal & locally sourced ingredients"
    },
    {
        feat: "vegetarian & dietary-Friendly options"
    },
    {
        feat: "exquisite pairings & unique flavors"
    }
]

const featuresItems = [
    {
        icon: <MdOutlineBrunchDining />,
        title: "premium dining",
        description: "it's very personal, and can only be a positive experience"
    },
    {
        icon: <GiCoolSpices />,
        title: 'abundant flavors',
        description: 'at secret recipe, we take immense price in crafting'
    },
    {
        icon: <LuHandPlatter />,
        title: 'indigenous Meal',
        description: 'with local ingredients, unique spins on traditional flavors'
    }
]

export const AboutPage = () => {
    return (
        <Flex className="py-8" direction="col">
            <Flex direction="col" className="md:flex-row">
                <Flex className="w-full md:w-1/2 md:justify-start lg:justify-center">
                    <div className="w-64 h-96 rounded-full relative">
                        <Image src={"/general/restaurant.jpg"} width={800} height={800} alt="restauran About" className="w-64 h-96 rounded-full" />
                        <Flex direction="col" className="w-24 h-24 p-2 rounded-xl bg-gray absolute top-20 -right-16">
                            <FaCrown size={25} className="text-yellow" />
                            <Text color="white" fw="medium">
                                30+ year of experience
                            </Text>
                        </Flex>
                    </div>
                </Flex>
                <Flex className="w-full md:w-1/2" direction="col" aling="start">
                    <Heading as="h1" fw="light" color="white" fs="sm" className="uppercase">
                        About us
                    </Heading>
                    <Text className="uppercase" color="white" fs="xxl" fw="medium">
                        our commitment to authenticity & <span className="text-red">excellence</span>
                    </Text>

                    <Text color="white">
                        Every dish we create is a celebration of connection, crafted with passion and <br /> inspired by diverse flavors. Join us in an initing where every bite <br /> sparks joy and every moment beconmes a cherished memory.
                    </Text>

                    <ul className="flex flex-col gap-y-2 mt-6">
                        {
                            features.map(({ feat }, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <IoIosCheckmarkCircle color="white" />
                                    <Text color="white" className="capitalize">
                                        {feat}
                                    </Text>
                                </li>
                            ))
                        }
                    </ul>

                    <Flex className="mt-6" gap="4">
                        <Button color="red" rounded="full">
                            <Text color="white" fw="medium">Order Now</Text>
                            <TiArrowRight color="white" />
                        </Button>
                        <Button color="white" rounded="full">
                            <Text color="black" fw="medium">Book A Table</Text>
                            <TiArrowRight />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="mt-8 border-t-2 border-gray w-full md:flex-row" direction="col">
                {
                    featuresItems.map(({ title, description, icon }, index) => (
                        <Flex key={index} className="w-72 p-2" gap="4">
                            <div className="p-2 rounded-full text-3xl border text-gray-300">
                                {icon}
                            </div>
                            <div>
                                <Heading fs="sm" className="capitalize" color="white">
                                    {title}
                                </Heading>
                                <Text className="leading-3.5 text-gray-300">
                                    {description}
                                </Text>
                            </div>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    )
}

