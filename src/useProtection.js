import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * ;)
 * `useProtection` Hook
 * Redirects based on a validation function's result.
 * @param {Function} validationFunc - A function that returns a boolean.
 * @param {string} goto_url - URL to navigate to if the validation passes.
 * @param {string} returnto_url - URL to navigate to if the validation fails.
 */
export function useProtection(validationFunc, goto_url, returnto_url) {
    const navigate = useNavigate();

    useEffect(() => {
        if (validationFunc()) {
            navigate(goto_url);
        } else {
            navigate(returnto_url);
        }
    }, [validationFunc, goto_url, returnto_url, navigate]);
}
