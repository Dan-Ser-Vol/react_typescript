import React, {ReactNode} from 'react';

interface ModalProp {
    children: ReactNode,
    title: string,
    onClose: () => void
}

const Modal = ({children, title, onClose}: ModalProp) => {
    return (
        <>
            <div className={"fixed bg-black/50 top-0 right-0 left-0 bottom-0"} onClick={onClose}>
                <div onClick={event => event.stopPropagation()}
                     className={"w-[500px] rounded p-5 bg-white absolute top-10 left-1/2 -translate-x-1/2"}>
                    <h1 className={"text-2xl text-center mb-2"}>{title}</h1>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;