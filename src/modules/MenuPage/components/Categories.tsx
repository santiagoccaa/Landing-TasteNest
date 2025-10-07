import { Flex, Text } from '@/components/UI'
import { useGlobal } from '@/hook/useGlobal'
import { categoriesList } from '@/modules/HomePage/components'
export const Categories = () => {

    const { handleChangeCategory, category } = useGlobal()

    return (
        <Flex className='w-full py-4' justify='start'>
            <div className='w-full overflow-y-auto px-12 flex gap-8 py-4'>
                <button
                    onClick={() => handleChangeCategory('')}
                    className="w-20 cursor-pointer"
                >
                    <Text color='black' fw="bold" fs='sm'>
                        All
                    </Text>
                </button>
                {
                    categoriesList.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => handleChangeCategory(c.icon)}
                            className={`w-20 cursor-pointer rounded-full p-2 px-4 transition-all duration-300 ${c.icon === category ? 'bg-red' : 'bg-transparent'}`}
                        >
                            <Text color={c.icon === category ? 'white' : 'black'} fw="bold" fs='sm'>
                                {c.name}
                            </Text>
                        </button>
                    ))
                }
            </div>
        </Flex>
    )
}

