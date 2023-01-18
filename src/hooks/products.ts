import {useCallback, useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";
import {toast} from "react-toastify";



export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState('')

    const addProduct = (product:IProduct) => {
        setProducts(prev => [...prev, product])
    }

    const getProducts = useCallback(
        async () => {
            try {
                setErrors('')
                setIsLoading(true)
                const {data} = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=12')
                setProducts(data)
                setIsLoading(false)
            } catch (e: unknown) {
                const error = e as AxiosError
                setIsLoading(false)
                setErrors(error.message)

                toast.error(error.message);
            }

        }, []
    )

    useEffect(() => {
        getProducts()
    }, [getProducts])

    return {products, errors, isLoading, addProduct}
}