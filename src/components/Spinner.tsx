import React, {FC} from 'react';

const Spinner:FC = () => {
    return (
        <div className=" flex  justify-center my-auto [ ">
            <svg className="
    loading-spinner
    inline-block
    w-8
    h-8
    border-4
    rounded-full
    text-black-500 " viewBox="0 0 24 24">
            </svg>
        </div>
    );
};

export default Spinner;