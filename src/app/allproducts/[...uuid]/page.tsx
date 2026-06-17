

import ProductDetailComponent from "@/components/products/ProductDetailComponent";

export default async function ProductDetail({
    params
}:{
    params: Promise<{uuid: string}>
}) {
    const uuid = await params;
    
  return (
    <ProductDetailComponent uuid={uuid?.uuid}/>
    
  )
}
