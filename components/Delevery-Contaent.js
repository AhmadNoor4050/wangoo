import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import StoreIcon from '@mui/icons-material/Store';
import styles from '../styles/Home.module.css'
import Image from "next/image"
const DeleveryContaent = () => {
    return (
        <> 
   
       <Grid  sx={{display:"flex", flexWrap: 'wrap'  ,  direction:"row" ,  
             justifyContent:"center" , mt:6, backgroundColor:"rgba(255,182,193,0.1)", borderRadius:5 }}  >

        <Container>
        <Typography variant="h3" sx={{my:5}} > 
            Get the Delivery  & Moving help you Need.....
        </Typography>
        </Container> 

        <Paper sx={{ height:300, width:220, my:5, borderRadius: 4 }}>
          <Container>  
            <Image src="/Group 2230.png" height={100} width={100} alt='some value' />
            <Typography variant="h6" sx={{mt:5}}>Retails Store Moves</Typography>
            <Typography variant="p">Lorem ipsum dohh Uteni ad minim, ullamco laboric nisi ut aliquip </Typography>
            
            </Container>
        </Paper>
        <Paper sx={{ height:300, width:220, my:5, borderRadius: 4 , mx:3 }}>
          <Container>  
        <Image src="/Group 2231.png" height={100} width={100} alt='some value' />
            <Typography variant="h6" sx={{mt:5}}>Small Moves</Typography>
            <Typography variant="p">Lorem ipsum dohh Uteni ad minim, ullamco laboric nisi ut aliquip </Typography>
            </Container>
        </Paper>

        <Paper sx={{ height:300, width:220, my:5, borderRadius: 4 }}>
          <Container>  
        <Image src="/flat.png" height={100} width={100} alt='some value' />
            <Typography variant="h6" sx={{mt:5}}>Apartment Moves</Typography>
            <Typography variant="p">Lorem ipsum dohh Uteni ad minim, ullamco laboric nisi ut aliquip </Typography>
            </Container>
        </Paper>

        <Paper sx={{ height:300, width:220, my:5, borderRadius: 4, mx:3 }}>
          <Container>  
        <Image src="/sofa (1).png" height={100} width={100} alt='some value' />
            <Typography variant="h6" sx={{mt:5}}>Furniture Moves</Typography>
            <Typography variant="p">Lorem ipsum dohh Uteni ad minim, ullamco laboric nisi ut aliquip </Typography>
            </Container>
        </Paper>
        
        <Paper sx={{ height:300, width:220, my:5, borderRadius: 4, mb:10 }}>
          <Container>  
        <Image src="/Group 2232.png" height={100} width={100} sx={{ml:3}} alt='some value' />
            <Typography variant="h6" sx={{mt:5}}>Business Moves</Typography>
            <Typography variant="p" sx={{}}>Lorem ipsum dohh Uteni ad minim, ullamco laboric nisi ut aliquip </Typography>
            </Container>
        </Paper>
            

        </Grid>
             
        </>  

     );
}
 
export default DeleveryContaent;