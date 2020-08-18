import  { useState, useEffect } from 'react';

const useDebounce: Function =  (value: string, timeout: number) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);

        return () => clearTimeout(handler);
    }, [value, timeout]);

    return state;
}

export default useDebounce;
