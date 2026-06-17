"use client"

import { useGetAllProductQuery } from "@/services/ecommerceApi"
import ProductComponent from "./ProductComponent"
import Link from "next/link"

export default function ProductList() {

    // calling customhook from ecommerce.ts
    const { data, error, isLoading } = useGetAllProductQuery({ page: 0, size: 24 })
    return (
        <div className="grid grid-cols-4 gap-2 container mx-auto py-16">
            {
                data?.content?.map((pro, _) => (

                    <Link key={_} href={`allproducts/${pro?.uuid}`}>
                        <ProductComponent
                            uuid={pro?.uuid}
                            name={pro?.name}
                            thumbnail={pro?.thumbnail}
                            priceOut={pro?.priceOut}
                            description={pro?.description} />
                    </Link>

                ))
            }

        </div>
    )
}
