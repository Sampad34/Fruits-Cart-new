import { createContext, useEffect, useState } from "react";


export const CartContext=createContext();

export const CartProvider=({children})=>{

    const [cart,setCart]=useState([])



    // load from localstorge at the start
    useEffect(()=>{
        const storedCartVal=JSON.parse(localStorage.getItem("cart"))

        if(storedCartVal)
            setCart(storedCartVal)

    },[])

    //load from localstorage whenever cart value changes
    useEffect(()=>{

        localStorage.setItem("cart",JSON.stringify(cart))

    },[cart])

    const addItem=(item)=>{
        setCart((prev)=>[...prev,item])
        
    }
    const removeItem=(id)=>{
        setCart((prev)=>prev.filter((item)=>item.id!==id))
    }
    const clearCart=()=>{
     setCart([])
    }

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )

}