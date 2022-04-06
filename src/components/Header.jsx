import React, {useState} from 'react'

import { Grid, TextField, Toolbar, Typography, IconButton,AppBar, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        mb={2}
          style={{
            background:'#b896fa',
        }}>
        <Toolbar>
        <IconButton
         
         onClick={()=> {
             navigate('/')
         }}
         sx={{
             mx:2,
             background: "white",
             ":hover": { background: "lightblue"},
         }}
         >
             <Home />
 
         </IconButton>
          <Typography variant="h6"style={{ fontWeight:600, marginLeft: "auto", color: "whitesmoke"}} sx={{ typography: { sm: 'h6', xs: 'body2', md: 'h6' }, flexGrow: 1 }}>Unsplash Images </Typography>
          <div style={{display:"flex"}}> 
         <TextField 
        onKeyDown={(e)=> {
            if(e.key=== "Enter") searchHandler();
        }}
        sm={10}
        inputRef={inputRef}
        variant="outlined"
        size="small"
        width='30%'
        sx={{ background: "white",}}
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
              
            </div>
          
        </Toolbar>
      </AppBar>
      <div style={{ margin: 5 }}>{props.children}</div>
    </Box>

)

}

export default Header