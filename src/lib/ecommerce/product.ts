

export interface ProductType{
    uuid: string,
    name: string,
    thumbnail: string,
    priceOut: number,
    description: string
}

export interface ProductResponse{
    content: ProductType[]
}