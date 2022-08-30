import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";

export type Role = "admin" | "editor" | "user";

interface Props {
  children: JSX.Element;
  role?: Role[];
}
export const RoleWrapper = ({ children, role }: Props) => {
  const { userRole } = useAuthContext();

  if (role && !role.includes(userRole)) return <Navigate to="/" />;

  return children;
};
