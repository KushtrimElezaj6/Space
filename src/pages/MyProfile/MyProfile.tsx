import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "../../layout/Header/Header";
import { ProfileSidebar } from "../../layout/SideBar/ProfileSidebar";

export const MyProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      <ProfileSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <h1>Welcome to profile</h1>
        <Outlet />
      </Box>
    </Box>
  );
};
