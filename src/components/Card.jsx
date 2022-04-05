import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

export default function CardCommon({ imagePath, alt }) {
  return (
    <Card sx={{ maxWidth: 300,maxHeight:250}}>
      <CardActionArea>
        <img src={imagePath} alt={alt} style={{width:300,height:250}} />
      </CardActionArea>
    </Card>
  );
}
