import React, { createContext, useContext } from "react";

// Badge Context
const BadgeContext = createContext(null);

/**
 * `Badge` Hook
 * Allows consumers to access the BadgeContext value.
 * @returns {*} Context value
 */
export function useBadge() {
    return useContext(BadgeContext);
}

/**
 * `Provider` Component
 * Wraps children with BadgeContext.Provider
 * @param {Object} props
 * @param {*} props.value - The value to pass to the context.
 * @param {React.ReactNode} props.children - Components to render within the provider.
 */
export function BadgeProvider({ value, children }) {
    return <BadgeContext.Provider value={value}>{children}</BadgeContext.Provider>;
}
