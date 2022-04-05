import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
const PageNotFound = () => {
    return (
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1>404 error : Page Not Found</h1>
        <Link to={"/"} >
          Back
        <IconButton
          sx={{
            ml: 2,
            background: "white",
            ":hover": { background: "lightblue" },
          }}
        >
        </IconButton>
                  </Link>
      </div>
    );
  };
  
  export default PageNotFound;
  