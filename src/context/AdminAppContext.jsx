import { createContext, useContext, useMemo, useState } from "react";
import { ROLES } from "../config/permissions.js";

const AdminAppContext = createContext(null);
const STORAGE_KEY = "dongbac_admin_preview_role";

function readStoredRole() {
  if (!import.meta.env.DEV) {
    return null;
  }

  const storedRole = window.localStorage.getItem(STORAGE_KEY);
  return Object.values(ROLES).includes(storedRole) ? storedRole : null;
}

export function AdminAppProvider({ children }) {
  const [role, setRole] = useState(readStoredRole);

  const activatePreviewRole = (nextRole) => {
    if (!import.meta.env.DEV || !Object.values(ROLES).includes(nextRole)) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, nextRole);
    setRole(nextRole);
  };

  const clearPreviewRole = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setRole(null);
  };

  const value = useMemo(
    () => ({
      role,
      activatePreviewRole,
      clearPreviewRole,
      isDevPreview: import.meta.env.DEV,
    }),
    [role],
  );

  return <AdminAppContext.Provider value={value}>{children}</AdminAppContext.Provider>;
}

export function useAdminApp() {
  const context = useContext(AdminAppContext);

  if (!context) {
    throw new Error("useAdminApp must be used inside AdminAppProvider");
  }

  return context;
}
