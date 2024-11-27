import React, { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BadgeContext = createContext(null);

export function useBadge() {
  return useContext(BadgeContext);
}

export function Provider({ children, validator }) {
  const badgeValue = validator(); 

  return (
    <BadgeContext.Provider value={badgeValue}>
      {children}
    </BadgeContext.Provider>
  );
}

export function Protect({ Proceed, Return, Badge }) {
  return Badge ? <Proceed /> : <Return />;
}

export function useProtection(goto_url, returnto_url) {
  const navigate = useNavigate();
  const badge = useBadge(); 

  useEffect(() => {
    if (badge) {
      navigate(goto_url); 
    } else {
      navigate(returnto_url); 
    }
  }, [badge, goto_url, returnto_url, navigate]);
}