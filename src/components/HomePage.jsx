import { useContext, useRef } from 'react';
import {Search } from '@mui/icons-material';
import {Grid, IconButton, TextField, Typography} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ImageContext } from '../context/ImageContext';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        background: "rgb(239,200,255)",
        background: 'linear-gradient(90deg, rgba(239,200,255,1) 0%, rgba(243,151,255,1) 40%, rgba(184,150,250,1) 100%)',
        width: '100vw',
        height: '100vh',
    },
}))

const HomePage = () => {
    const classes = useStyles();
    const inputRef = useRef();
    const navigate = useNavigate();
    const { searchImage } =useContext(ImageContext);

    const searchHandler = () => {
        if(inputRef.current.value.trim()!=="") {
            searchImage(inputRef.current.value).then(()=>{
                navigate(`/query=${inputRef.current.value}&page=1`)

            });
        }
        return
    }
    return (
        <Grid 
        spacing={0}
        container
        display="table"
        alignContent="center"
        justifyContent="center"
        classes={classes.root}
        >
        <Grid item xs={12} paddingLeft={70} marginTop={20}>
                <Typography color="white" variant="h2" > Search Images from unsplash</Typography>
            </Grid>
        <Grid item xs={12} paddingLeft={70} marginTop={20}>
            <TextField 
            onKeyDown={((e)=>{
                if(e.key==="Enter") searchHandler();
            })}
            inputRef={inputRef}
            variant="outlined"
            label="search"
            sx={{ width: 400}}
            >

            </TextField>
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
    ) 
} 
export default HomePage