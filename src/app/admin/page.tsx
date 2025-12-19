import { Flex, Heading } from "@/components/UI"

const PageAdmin = () => {
    return (
        <div>
            <Flex direction="col" className="w-full">
                <Heading>Categories</Heading>
                <Flex gap="10">
                    {
                        [1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="bg-red w-10 h-10 rounded-full" />
                        ))
                    }
                </Flex>
            </Flex>

            <Flex direction="col" className="w-full mt-12">
                <Heading>Products</Heading>
                <Flex gap="10">
                    {
                        [1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="w-40 h-24 bg-green-300 rounded-lg" />
                        ))
                    }
                </Flex>
            </Flex>
        </div>
    )
}

export default PageAdmin
