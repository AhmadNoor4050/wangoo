import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
      <>
      <AppBar sx={{backgroundColor:"white" }}>    
          <Container>
 
    <Grid container  >
    <Grid item xs={2}> 
    <Typography sx={{color:"black"}}>LOGO </Typography>
    </Grid>
        

    <Grid item xs={10} sx={{display:"flex", justifyContent:"flex-end", color:"white" }}>

        <Button>Link 1</Button>
        <Button sx={{mx:5}}>Link 2</Button>
        <Button>Link 3</Button>
        <Button sx={{ml:5}}>Link 4</Button>
        
    </Grid>
        
        

        

    </Grid>  
</Container>
    </AppBar>
    {/* <Paper sx={{}}>
      <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
        
        <Typography>Link 1</Typography>
        <Typography>Link 2</Typography>
        <Typography>Link 3</Typography>
        <Typography>Link 4</Typography>
        <Typography>Link 5</Typography>


        </Toolbar>
        </Container>
      </AppBar>
    </Paper> */}
    </>
  );
}
