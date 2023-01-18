import React, {useContext, useState} from 'react';
import {useProducts} from "../hooks/products";
import Product from "../components/Product";
import {ToastContainer} from "react-toastify";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import {IProduct} from "../models";
import {ModalContext} from "../context/ModalContext";

const Home = () => {

    const {products, isLoading, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className=" container h-[100vh] flex flex-col mx-auto bg-gray-50">
            {isLoading && <Spinner/>}
            {
                products.map((product, idx) => <Product key={product.id} product={product}/>)
            }

            {modal && <Modal title={"Create new product"} onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            <button
                onClick={() => open()}
                className={"fixed bottom-5 right-5 text-center rounded-full " +
                    "bg-red-500 pt-3 pb-4 px-5 font-bold text-white text-2xl"}>
                <div>+</div>
            </button>
            <ToastContainer position="top-center"/>
        </div>
    );
};

export default Home;