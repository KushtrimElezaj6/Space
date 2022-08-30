import React, { useContext } from "react";
import { Role } from "../../RoleWrapper/RoleWrapper";

export interface AuthContextFields {
  userRole: Role;
  user: string | null;
  onRoleCheck: (role: Role) => void;
  onLogout: () => void;
  onLogin: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContextFields>({
  // vlerat baze ose initial values
  userRole: "admin",
  user: null,
  onRoleCheck() {},
  onLogin: () => {},
  onLogout() {},
});

export const useAuthContext = () => useContext(AuthContext);
