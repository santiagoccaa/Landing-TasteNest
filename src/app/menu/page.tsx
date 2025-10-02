"use client"

import { Button, Container, Flex, Heading, Text } from "@/components/UI"
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useGlobal } from "@/hook/useGlobal"
import { categoriesList } from "@/modules/HomePage/components"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import { TbPlus } from "react-icons/tb"
import Link from "next/link";

const MenuPage = () => {

  const params = useParams()
  const { menuSelected, handleChangeCategory } = useGlobal()
  const [viewMenu, setViewMenu] = useState(false)

  return (
    <div className="bg-secondary">
      <Container>
        <Flex
          className="w-full pt-24 lg:pt-4 h-screen overflow-hidden relative lg:flex-row lg:items-start lg:justify-start" justify="center"
          aling="center"
          direction="col"
        >
          <button
            onClick={() => setViewMenu(!viewMenu)}
            className="absolute block lg:hidden top-2 right-2 bg-red p-4 rounded-full text-2xl text-white z-20"
          >
            <MdOutlineRestaurantMenu />
          </button>
          {/* Categorias */}
          <div
            className={`absolute top-0 ${viewMenu ? 'left-0' : '-left-[100%] lg:left-0'} bg-white transition-all duration-300 lg:relative px-4 z-40 w-4/6 lg:w-auto h-full`}
          >
            <Heading className="capitalize" fs="xxl">
              {params.category}
            </Heading>
            <Flex direction="col" gap="10">
              <Link href={"/"} className="p-4 rounded-full text-sm font-bold">
                <div>
                  <Image src="/general/logo.png" width={400} height={400} alt="logo page" className="w-32 h-14" />
                </div>
              </Link>
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
          {/* Products */}
          <Flex justify="start" aling="start" className="overflow-y-auto h-[90vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-4 px-4">
              {menuSelected.map(({ title, description, price, menu_category }, idx) => (
                <article key={idx} className="w-72 h-96 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-56 w-full bg-pink-300">
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
