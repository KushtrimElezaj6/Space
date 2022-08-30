import { Box, Toolbar } from "@mui/material";

import CardComponent from "../../components/CardComponent/CardComponent";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/SideBar/SideBar";

import { usePhotos } from "../../api/hooks/usePhotos";

export const Photos = () => {
  const { isLoading, error, isError, data } = usePhotos();

  if (isLoading) {
    return <div>Loading photos...</div>;
  }
  if (isError) {
    console.log(error);

    return <div>Photos could't be loaded</div>;
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
              image={item.thumbnailUrl}
              title={item.title}
              body={item.url}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};
