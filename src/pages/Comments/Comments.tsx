import { Box, Toolbar } from "@mui/material";

import { useComments } from "../../api/hooks/useComments";

import CardComponent from "../../components/CardComponent/CardComponent";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/SideBar/SideBar";

export const Comments = () => {
  const { isLoading, error, isError, data } = useComments();

  if (isLoading) {
    return <div>Loading comments...</div>;
  }
  if (isError) {
    console.log(error);

    return <div>Comments could't be loaded</div>;
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
              title={item.name}
              body={item.body}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};
