import { useEffect, useRef, useState } from "react";

export async function useDebounce(value, delay)
{
    const [debebouncedValue, setdebebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setdebebouncedValue(value)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debebouncedValue;
}