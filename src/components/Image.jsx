import { Card, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Image = () => {
  const image = useLocation();
  return (
    <Header>
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
      <Card  height={90}>
        <img src={image.state.urls.regular} alt="aaa" />
      </Card>
      </Grid>

    </Header>
  );
};

export default Image;
