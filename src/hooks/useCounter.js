import {useState} from "react";

export default function useProductCounter() {
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(prevCount => prevCount + 1);
    }

    function decrement() {
        setCounter(prevCount => {
            if (prevCount > 0) {
                return prevCount - 1;
            }
            return 0;
        });
    }

    return [counter, increment, decrement];
}