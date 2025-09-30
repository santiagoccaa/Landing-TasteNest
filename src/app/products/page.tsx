import Image from "next/image"


async function GetProducts() {
    const res = await fetch('http://localhost:1337/api/menu-products?populate=*')
    const data = await res.json()
    return data
}

const ProductsPage = async () => {
    const { data: p } = await GetProducts()
    console.log("Productos");

    console.log(p);

    return (
        <div className='h-screen bg-black flex justify-center items-center'>
            {p.map((p) => (
                <div key={p.id}>
                    <h1>{p.title}</h1>
                    <Image src={`http://localhost:1337${p.image.url}`} width={800} height={800} alt="image product" className="w-48 h-48" />
                </div>
            ))}
        </div>
    )
}

export default ProductsPage
