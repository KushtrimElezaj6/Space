import { Box, Toolbar } from "@mui/material";

import { usePosts } from "../../api/hooks/usePosts";

import CardComponent from "../../components/CardComponent/CardComponent";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/SideBar/SideBar";

export const Posts = () => {
  const { isLoading, error, isError, data } = usePosts();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }
  if (isError) {
    console.log(error);

    return <div>Posts could't be loaded</div>;
  }

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

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            rowGap: "30px",
            columnGap: "40px",
            justifyContent: "center",
          }}
        >
          {data?.map((item) => (
            <CardComponent
              image="https://via.placeholder.com/600/771796"
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};
