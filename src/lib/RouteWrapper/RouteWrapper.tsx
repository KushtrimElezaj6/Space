import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";

// export type Role = "admin" | "editor" | "user";

interface Props {
  children: JSX.Element;
  routeType: "protected" | "guest";
  // role?: Role[];
}

export const RouteWrapper = ({ children, routeType }: Props) => {
  const { user } = useAuthContext();

  if (!user && routeType === "protected") return <Navigate to="/login" />;
  if (user && routeType === "guest") return <Navigate to="/" />;

  return children;
};
