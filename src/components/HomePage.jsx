
import { Search } from "@mui/icons-material";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContext } from "../context/ImageContext";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    background: "rgb(2,0,36)",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 30%, rgba(0,212,255,1) 79%);",
      width: '100vw',
      height: '100vh',
  },


}))
const HomePage = () => {
  const classes = useStyles()
  const inputRef = useRef();
  let navigate = useNavigate();
  let { searchImage } = useContext(ImageContext);
  const searchHandler = () => {
    if (inputRef.current.value.trim() === "") {
      return;
    } else {
      searchImage(inputRef.current.value).then(() => {
        navigate(`/query=${inputRef.current.value}&page=1`);
      });
    }
  };
  return (
    <Grid
      spacing={0}
      container
      display="table"
      alignContent="center"
      justifyContent="center"
      className={classes.root}
    >
      <Grid item xs={12} textAlign="center" marginTop={10}>
        <Typography color="white" variant="h2">Seach Images</Typography>
      </Grid>
      <Grid item xs={12} paddingLeft={70} marginTop={20}>
        <TextField
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchHandler();
            }
          }}
          inputRef={inputRef}
          variant="outlined"
          label="search"
          sx={{ width: 400 }}
        />
        <IconButton
          sx={{ background: "lightblue", height: 50, width: 50, ml: 2 }}
          onClick={() => {
            searchHandler();
          }}
        >
          <Search />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default HomePage;

