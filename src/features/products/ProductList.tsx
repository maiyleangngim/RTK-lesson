
"use client"
import { ProductType } from '@/lib/products';
import { useGetAllProductQuery } from '@/services/ecommerceApi'

export default function ProductList() {
    const {data, error, isLoading} = useGetAllProductQuery();
    console.log(`Loading: ${isLoading}`)
    console.log(`All products: ${data as ProductType}`);
  return (
    <div>

    </div>
  )
}
