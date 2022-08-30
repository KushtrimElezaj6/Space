import { AccountBox, PrivacyTip, PrivacyTipRounded } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const ProfileSidebar = () => {
  const navigate = useNavigate();

  const drawerWidth = 240;

  const items = [
    {
      text: "Account",
      path: "/my-profile/account",
    },
    {
      text: "Privacy",
      path: "/my-profile/privacy",
    },
    {
      text: "DEACTIVATE ACCOUNT",
      path: "/my-profile/deactivate-account",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "rgba(46, 43, 101, 0.94)",
        },
      }}
    >
      <Toolbar />

      <List
        sx={{
          marginTop: 3,
        }}
      >
        {items.map((item) => (
          <ListItem
            sx={{
              color: "white",
            }}
            key={item.text}
            button
            onClick={() => navigate(item.path)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <div></div>
    </Drawer>
  );
};
