"use client"

import { Button, Container, Flex, Heading, Text } from "@/components/UI"
import { useGlobal } from "@/hook/useGlobal"
import { categoriesList } from "@/modules/HomePage/components"
import Image from "next/image"
import { useParams } from "next/navigation"
import { TbPlus } from "react-icons/tb"

const MenuPage = () => {

  const params = useParams()
  const { menuSelected, handleChangeCategory } = useGlobal()

  return (
    <div className="bg-secondary py-16">
      <Container>
        <Flex className="w-full bg-blue-400 lg:flex-row lg:items-start" aling="center" direction="col">
          <div className="h-full w-72 hidden lg:block">
            <Heading className="capitalize" fs="xxl">
              {params.category}
            </Heading>
            <Flex direction="col" gap="10" className="mt-12">
              {
                categoriesList.map((c) => (
                  <Button
                    color="red"
                    key={c.id}
                    onClick={() => handleChangeCategory(c.icon)}
                    className="w-40 gap-2"
                  >
                    <Image
                      src={`/categories/${c.name}.svg`}
                      alt={c.name}
                      width={400}
                      height={400}
                      className="w-10 h-10"
                      loading="lazy"
                    />
                    <Text color="white" fw="bold">
                      {c.name}
                    </Text>
                  </Button>
                ))
              }
            </Flex>
          </div>
          <Flex justify="start" aling="start" className=" md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {menuSelected.map(({ title, description, price, menu_category }, idx) => (
                <article key={idx} className="w-80 h-96 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-56 w-full">
                    <Image
                      src={`/categories/${menu_category}.svg`}
                      alt={title}
                      fill
                      className="bg-cover bg-center"
                      loading="lazy"
                    />
                    <button
                      aria-label={`Agregar ${title}`}
                      className="absolute right-3 bottom-[-18px] bg-white rounded-full p-3 shadow-xl border border-gray-100 hover:scale-105 transform transition-all duration-150"
                    >
                      <TbPlus size={20} />
                    </button>
                  </div>
                  <div className="p-4 pt-6">
                    <Heading fs="lg" fw="medium">{title}</Heading>
                    <Text className="mt-2 line-clamp-3">{description}</Text>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">${price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}

export default MenuPage
