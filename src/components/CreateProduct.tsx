import React, {FormEvent, useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import {toast} from "react-toastify";



interface CreateProductProp {
    onCreate: (product: IProduct) => void
}

const productsData: IProduct = {
    title: '',
    price: 123,
    description: "lorem8  SAdadsa  asd",
    category: "electronic",
    image: 'https://i.pravatar.cc',
    rating: {
        rate: 43,
        count: 45
    }
}

const CreateProduct = ({onCreate}: CreateProductProp) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    async function submitHandler(e: FormEvent) {
        e.preventDefault()
        if(value.trim().length === 0) {
            toast.error(error || "Please enter title")
            setError('Please enter valid title')
            return
        }
        productsData.title = value
      const {data} =  await axios.post<IProduct>('https://fakestoreapi.com/products', productsData)
        onCreate(data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setError('')
    }


    return (
        <>
            <form
                onSubmit={submitHandler}
            >
                <input
                    type={'text'}
                    value={value}
                    onChange={changeHandler}
                    placeholder={"Enter product title"}
                    className={"border py-2 px-4 rounded mb-2 w-full"}/>
                <button type={"submit"} className={"py-2 px-4 border rounded bg-yellow-500 hover:text-white"}>Create
                </button>
            </form>
        </>
    );
};

export default CreateProduct;