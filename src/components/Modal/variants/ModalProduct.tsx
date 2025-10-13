import { Heading, Text } from "@/components/UI";
import { useGlobal } from "@/hook/useGlobal";
import Image from "next/image";

export function ModalProduct() {

    const { productMenu } = useGlobal()

    if (!productMenu) return
    
    return (
        <div className="bg-white p-4">

            <div className="flex items-center justify-center sm:col-span-1 bg-red">
                <div className="h-40 w-full relative">
                    <Image src={`/categories/${productMenu.menu_category}.svg`} fill alt={productMenu.title} />
                </div>
            </div>


            <div className="sm:col-span-2">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <Heading className="!text-xl md:!text-2xl">{productMenu.title}</Heading>
                    </div>
                </div>
            </div>
            <Text >{productMenu.description}</Text>

            <div className="mt-4">
                <h4 className="text-sm font-medium">Ingredientes</h4>
                {productMenu.ingredients && productMenu.ingredients.length > 0 ? (
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        {productMenu.ingredients.map((ing, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="inline-block h-2 w-2 rounded-full bg-red mt-1" />
                                <span className="truncate">{ing}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Text className="mt-2 text-sm text-gray-500">No hay ingredientes listados.</Text>
                )}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
                <div className="text-right">
                    <Text fs='lg' fw='bold'>${productMenu.price}</Text>
                </div>
            </div>
        </div>
    )
}

