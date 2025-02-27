"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getProducts = (API:string) => {
    const params = { page: 1, limit: 1000 }

    const { data:products = [], isLoading } = useQuery({
        queryKey: ['products-items'],
        queryFn: () => instance().get(API, { params }).then(res => res.data)
    })
    return {products, isLoading}
}

export const getProductsV2 = (minPrice?:number, maxPrice?:number, brandId?:number | null) => {
    const params = { page: 1, limit: 1000, min_price:minPrice ? minPrice : null, max_price:maxPrice ? maxPrice : null, brand_id:brandId ? brandId: null}

    const { data:products = [], isLoading } = useQuery({
        queryKey: ['product_v2', minPrice, maxPrice,brandId],
        queryFn: () => instance().get("/products", { params }).then(res => res.data.items)
    })
    return {products, isLoading}
}