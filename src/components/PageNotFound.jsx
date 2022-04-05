import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
        <Grid sx={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>    <h1>404 error : Page Not Found</h1> 
    <Button 
    variant="contained"
    endIcon={<ArrowBackIcon />}
          sx={{
            ml: 2,
            ":hover": { background: "darktblue" },
          }}
          onClick={(()=> navigate("/"))}
        > Back
        </Button>
    </Item>
  </Grid>

</Grid>


      </div>
    );
  };
  
  export default PageNotFound;
  