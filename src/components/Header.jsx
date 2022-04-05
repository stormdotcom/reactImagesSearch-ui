import React from 'react'

import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContext } from "../context/ImageContext";
import { Search, Home } from '@mui/icons-material';

function Header(props) {
    const { searchImage } = useContext(ImageContext)
    const inputRef = useRef();
    const navigate = useNavigate();
    const searchHandler = () => {
        if(inputRef.current.value.trim()!=="") {
            searchImage(inputRef.current.value).then(()=>{
                navigate(`/query=${inputRef.current.value}&page=1`)

            });
        }
        return
    }
  return (
      <>
    <div style={{
        height:60,
        background:'#b896fa',
        alignItems: 'center',
        display : 'flex'
    }}>
         <IconButton
         
        onClick={()=> {
            navigate('/')
        }}
        sx={{
            ml:5,
            background: "white",
            ":hover": { background: "lightblue"},
            position: "absolute",
            left: 0
        }}
        >
            <Home />

        </IconButton>
        {/*  */}

        <Typography  fontWeight={600} variant="h6"style={{ marginLeft: 100, color: "whitesmoke"}}>Unsplash Images </Typography>

        <Grid
               sx={{
                mr:5,
                position: "absolute",
                right: 0
            }}
         >  
       <TextField 
        onKeyDown={(e)=> {
            if(e.key=== "Enter") searchHandler();
        }}
        inputRef={inputRef}
        variant="outlined"
        size="small"
        sx={{ background: "white", marginLeft : 2}}
        placeholder='Search'
        />
        <IconButton 
        sx={{
            ml:2,
            background: "white",
            ":hover": { background: "lightblue"},
        }}
        onClick={()=> {
            searchHandler()
        }}
        >
            <Search />
        </IconButton>
        </Grid>
    </div>
         <div style={{ margin: 5 }}>{props.children}</div>
    </>
  )
}

export default Header