import { useRef, useCallback, useEffect } from "react"

/**
 * Custom hook that returns a function to debounce any function call
 * @param {number} delay - The delay in milliseconds (default: 500ms)
 * @returns {Function} A function that can be used to debounce any function
 */
const useDebounce = (delay = 500) => {
    const timeoutRef = useRef(null);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const debounce = useCallback((func) => {
        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set new timeout
        timeoutRef.current = setTimeout(() => {
            if (typeof func === 'function') {
                func();
            }
        }, delay);
    }, [delay]);

    return debounce;
}

export default useDebounce

