"use client"

import { useParams } from "next/navigation"

const MenuPage = () => {

  const params = useParams()
  console.log(params);

  return (
    <div>
      MenuPage

      <div className="text-2xl">
        {params.category}
      </div>
    </div>
  )
}

export default MenuPage
