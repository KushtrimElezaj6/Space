import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { PermissionWrapper } from "../../components/PermissionWrapper/PermissionWrapper";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

export const Header = () => {
  const { onLogout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#F9FAFC",
          color: "white",
          backgroundColor: "#1b1b1b",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <img
              src="https://cdn-gce.allmovie.com/images/allmovie_wordmark.png"
              style={{
                width: "80px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
          </Box>
          <nav>
            <Box
              component="ul"
              sx={{
                display: "flex",
                listStyleType: "none",
                columnGap: "30px",
                fontWeight: "bold",
              }}
            >
              <PermissionWrapper role={["admin", "editor"]}>
                <li>
                  <NavLink
                    to="/admin"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Admin
                  </NavLink>
                </li>
              </PermissionWrapper>
              <li>
                <NavLink
                  to="/my-movies"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  My Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-profile"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  My Profile
                </NavLink>
              </li>
              <li
                onClick={onLogout}
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </li>
            </Box>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};
