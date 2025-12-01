import { useEffect, useRef } from "react";

export function usePrev(value){
    const ref = useRef();
    console.log("re-renderd happened with new value "+value)

    useEffect(() => {
        console.log("updated to teh ref to be" + value)
        ref.current=value // 0
    }, [value])
    console.log("returned "+ref.current)
    return ref.current; // undefined
}

//it return first,effect gets called later