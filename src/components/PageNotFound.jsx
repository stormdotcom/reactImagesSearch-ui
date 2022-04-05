import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Grid, Item} from '@mui/material/';

const PageNotFound = () => {
  const navigate = useNavigate()
    return (
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>    <h1>404 error : Page Not Found</h1> 
    <IconButton
          sx={{
            ml: 2,
            background: "white",
            ":hover": { background: "lightblue" },
          }}
          onClick={(()=> navigate("/"))}
        > Back
          <ArrowBackIcon />
        </IconButton>
    </Item>
  </Grid>

</Grid>


      </div>
    );
  };
  
  export default PageNotFound;
  