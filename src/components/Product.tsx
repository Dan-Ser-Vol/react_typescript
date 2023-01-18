import React, {FC, useState} from 'react';
import {IProduct} from "../models";

const typeBlue = "w-[100px] py-1 bg-blue-500  hover:bg-sky-500 rounded text-white "
const typeYellow = "w-[100px] py-1 bg-yellow-500  hover:bg-yellow-400 rounded text-white "

type ProductProp = {
    product: IProduct
}

const Product: FC<ProductProp> = ({product}) => {

    const [isDetail, setIsDetail] = useState(false)
    return (
        <div className={"flex flex-col m-auto w-5/6 bg-gray-200 items-center border p-5 rounded mt-2"}>
            <p>price: {product.price} USD</p>
            <img className={"w-1/4  "} src={product.image} alt=""/>
            <p className={"font-bold py-2"}> {product.title}</p>
            <button onClick={() => setIsDetail(!isDetail)}
                    className={isDetail ? typeYellow : typeBlue}>{isDetail ? "Hide detail" : "Show detail"}</button>
            {
                isDetail && <p className={"font-bold py-2"}>{product.description}</p>
            }

        </div>
    );
};

export default Product;