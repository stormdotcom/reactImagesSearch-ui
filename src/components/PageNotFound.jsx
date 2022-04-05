import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        <h1>404 error : Page Not Found</h1>
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
      </div>
    );
  };
  
  export default PageNotFound;
  