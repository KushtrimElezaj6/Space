import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { Role } from "../../lib/RoleWrapper/RoleWrapper";

interface Props {
  role: Role[];
  children: React.ReactNode;
}

export const PermissionWrapper = ({ role, children }: Props) => {
  const { userRole } = useAuthContext();
  if (role.includes(userRole)) {
    return <>{children}</>;
  }
  return null;
};
