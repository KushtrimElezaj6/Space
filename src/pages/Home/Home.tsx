import { HomeMini } from "@mui/icons-material";
import { Box, Toolbar } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/SideBar/SideBar";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { Role } from "../../lib/RoleWrapper/RoleWrapper";

const userTexts: { [key in Role]: string } = {
  admin: "Hello admin",
  editor: "Hello editor",
  user: "Hello user",
};

export const Home = () => {
  const { user, userRole } = useAuthContext();
  if (user === null) return <Navigate to="/login" />;
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <h1>Welcome {user?.split("@")[0]}!</h1>
        <h2>{userTexts[userRole]}</h2>
      </Box>
    </Box>
  );
};
