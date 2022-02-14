import { Grid, Box,Typography } from "@mui/material";
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return ( 
        <Grid container xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor:"rgba(0,0, 255,0.6)"}}>
             <Grid item xs={3} sm={3} md={3} lg={3} sx={{ justifyContent:"center", textAlign:"center"}}>
                <Box sx={{mt:5}}>
                <Image src="/final logo website version-01-01.png" width="250" height="60" alt='some value' />
                </Box>
             </Grid>

             <Grid item xs={3} sm={3} md={3} lg={3} >
                 <Box sx={{mt:5, textAlign:"center"}}>
                 <Typography variant="h4">Links</Typography>
                 <Typography>Home</Typography>
                 <Typography>OurProducts</Typography>
                 <Typography>Our Team</Typography>
                 </Box>
             </Grid>
             <Grid item xs={3} sm={3} md={3} lg={3} >
                 <Box sx={{mt:5}}>
                 <Typography variant="h5">Contact US</Typography>
                 <Typography variant="p" sx={{}}>office#203 cubator lne park Road  Comsats University ISlamabad,
                     Punjab, pakistan-46000  phone#0992-3114547849
                 </Typography>
                 </Box>
             </Grid>
             <Grid item xs={3} sm={3} md={3} lg={3} sx={{}}>
                 <Box sx={{mt:5, textAlign:"center"}}>

                    <Typography variant="h5"> Follow Us</Typography>

                    
                    <Image src="/fb.png" height="40" width="40" alt='some value' /><br />
                    <Image src="/insta.png" height="40" width="40" alt='some value' /> <br />
                    <Image src="/Tweter.png" height="40" width="40" alt='some value' /> <br />
                    <Image src="/linkin.png" height="40" width="40" alt='some value' /> 




                 </Box>



             </Grid>

             
        </Grid>
     );
}
 
export default Footer;