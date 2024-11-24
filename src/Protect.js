import React from "react";

/**
 * `Protect` Component
 * Conditionally renders one of two components based on a badge value.
 * @param {Object} props
 * @param {React.ComponentType} props.Proceed - Component to render if badgeValue is true.
 * @param {React.ComponentType} props.Return - Component to render if badgeValue is false.
 * @param {boolean} props.badgeValue - Determines which component to render.
 */
export function Protect({ Proceed, Return, badgeValue }) {
    return badgeValue ? <Proceed /> : <Return />;
}
