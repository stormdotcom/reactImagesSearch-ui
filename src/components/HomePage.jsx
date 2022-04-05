import { useContext, useRef } from 'react';
import {Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Grid , IconButton, TextField, Typography} from '@mui/material';
import { ImageContext } from '../context/ImageContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        
    },
}))

const HomePage = () => {
    const classes = useStyles();
    const inputRef = useRef();
    const navigate = useNavigate();
    const { searchImage } =useContext(ImageContext);

    const searchHandler = () => {
        if(inputRef.current.value.trim()==="") {
            return
        }
        else {
            searchImage(inputRef.current.value).then(()=>{
                navigate(`/query=${inputRef.current.value}&page=1`)

            });
        }
    }
    return (
        <div 
        className="homePageGrid" 
> 
        <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
               >
            
        <Grid item xs={12}  marginTop={10}>
                <Typography  color="white" sx={{fontWeight: 600}} variant="h2" > Search Images from Unsplash</Typography>
            </Grid>
        <Grid item xs={12}    marginTop={10}>
            <TextField 
            onKeyDown={((e)=>{
                if(e.key==="Enter") searchHandler();
            })}
            inputRef={inputRef}
            variant="outlined"
            label="Search"
            sx={{ width: 400}}
            >

            </TextField>
            <IconButton
          sx={{ background: "#8248f0", height: 50, width: 50, ml: 2, ":hover": {
            background: "#5724b8"
          } }}
          onClick={() => {
            searchHandler();
          }}
        >
          <Search />
        </IconButton>
        </Grid>
        </Grid>
        </div>
    ) 
} 
export default HomePage