import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

const apiUrl:string = 'https://fakestoreapi.com'

export type Product = {
    id: number
    title:string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count:number
    }
}

export const useProductStore = defineStore('products', () => {
    // all Ref 
    const all:Ref<Product[]> = ref([])
    const ids: Ref<number[]> = ref([])
    const loaded = ():boolean => {
        return all.value.length > 0
    }
    const fetchAll = async() => {
        if (loaded()) {
            return 
        }
        const res = await fetch(`${apiUrl}/products`)//发送了请求
        const data: Product[] = await res.json()//统一的JSON[] 返回Any[],要给data进行类型约束
        console.log(data,'3333333333')
        all.value = data
        ids.value = data.map(product => product.id)
    }
    return {
        all,
        ids,
        loaded,
        fetchAll
    }
})