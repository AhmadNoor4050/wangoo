import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
const SectionFour = () => {
    return ( 

        <Container>
        <Grid sx={{display:"flex", justifyContent:"center" , flexWrap:"wrap" , my:5,  }}>
                    <Box >
                    <Typography variant="p" sx={{color:"orange"}}>Contect Us </Typography>
                    <Typography variant="h3">Lets get in touch </Typography>
                    
                    
                    <Box sx={{ width: 500, maxWidth: '100%', }} >
                    <TextField fullWidth label="full Name*" id="fullWidth" variant="standard"  />
                    </Box>
                    <Box sx={{ width: 500, maxWidth: '100%', my:5}} >
                    <TextField fullWidth label="Email Id*" id="fullWidth" variant="standard"  />
                    </Box>
                    <Box sx={{ width: 500, maxWidth: '100%',mb:5 }} >
                    <TextField fullWidth label="Subject*" id="fullWidth" variant="standard"  />
                    </Box>

                    <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Your Massage here"
                    style={{ width: 500 , height:100, borderBottom:1}}
                /><br />
                    <Button variant="contained" sx={{mt:3}}>Contained</Button>

                    </Box>

                    <Box sx={{justifyContent:"center" , textAlign:"center", mt:5}}  >
                        <Image src="/contact us.png" height={400} width={600} alt='some value' />
                    </Box>

        </Grid>
        </Container>
     );
}
 
export default SectionFour;

