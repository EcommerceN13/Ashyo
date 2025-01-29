import { getProducts } from "@/service/getProducts"
import { useParams } from "next/navigation"


const CategoryFilter = () => {
    const {categoryFilter} = useParams()
    const 
    const {products ,isLoading} = getProductsSear("/products");



    return (
        <div>
            <h2>Filtered Products</h2>
        </div>
    )
}