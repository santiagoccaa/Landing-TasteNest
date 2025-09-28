import { Flex, Heading, Text } from "@/components/UI"
import Image from "next/image"

interface ItemMenu {
    id: number,
    title: string,
    description: string,
    price: string,
    portion: string
    image: string
}

const menuList: ItemMenu[] = [
    {
        id: 1,
        title: 'Steaks & BBQ',
        description: 'canonical classics to obscure tiki drinks',
        price: '120',
        portion: 'person',
        image: 'chusos'
    },
    {
        id: 2,
        title: 'Cocktails',
        description: 'canonical classics to obscure tiki drinks',
        price: '120',
        portion: 'person',
        image: 'cocktails'
    }
]

export const DiscoverMenu = () => {
    return (
        <Flex direction="col" className="my-16">
            <Heading fs="xxl">
                Discover Menu
            </Heading>
            <div className="w-40 h-1 rounded-full bg-yellow mb-12" />

            <Flex justify="between" gap="10" direction="col" className="md:flex-row">
                {
                    menuList.map((menu) => (
                        <div key={menu.id} className="w-96 h-44 rounded-2xl bg-black relative">
                            <Image src={`/general/${menu.image}.png`} fill alt={menu.title} />
                            <div className="w-full h-full absolute top-0 left-0 p-8">
                                <Heading fs="xxl" color="white">{menu.title}</Heading>
                                <Text color="white" className="w-50">
                                    {menu.description}
                                </Text>
                            </div>
                            <div className="absolute w-20 h-20 rounded-full bg-yellow left-8 -bottom-6">
                                <Flex direction="col" gap="0" className="w-full h-full ">
                                    <Heading color="red" className="leading-3">
                                        {menu.price}
                                    </Heading>
                                    <Text fw="bold" color="black">
                                        {menu.portion}
                                    </Text>
                                </Flex>
                            </div>
                        </div>
                    ))
                }
            </Flex>
        </Flex>
    )
}
