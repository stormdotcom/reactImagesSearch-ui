import { Card } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Image = () => {
  const image = useLocation();
  return (
    <Header>
      <Card style={{marginLeft:200}}>
        <img src={image.state.urls.regular} alt="aaa" />
      </Card>
    </Header>
  );
};

export default Image;
