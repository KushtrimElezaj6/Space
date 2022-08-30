import { useState } from "react";
import { Role } from "../../RoleWrapper/RoleWrapper";
import { AuthContext, AuthContextFields } from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState<string | null>(() => {
    const value = localStorage.getItem("user");
    return value;
  });
  const [userRole, setUserRole] = useState<Role>("user");

  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleRoleCheck = (role: Role) => {
    setUserRole(role);
  };

  const context: AuthContextFields = {
    user,
    userRole,
    onRoleCheck: handleRoleCheck,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
