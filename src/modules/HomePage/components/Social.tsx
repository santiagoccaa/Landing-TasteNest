import { Flex, Heading, Text } from "@/components/UI"
import { BsInstagram } from "react-icons/bs"

export const Social = () => {
    return (
        <Flex direction="col" className="my-16">
            <button className="p-4 bg-red rounded-full text-2xl cursor-pointer hover:scale-105 duration-300">
                <BsInstagram color="white" />
            </button>
            <Heading fs="xxl">
                Follow @shawonetc3
            </Heading>
            <Text>
                Join our community to inspire your desires
            </Text>
        </Flex>
    )
}