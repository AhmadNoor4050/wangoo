import { Grid, Box, Container, Typography } from "@mui/material";
import Image from 'next/image'
const SectionFive = () => {
    return ( 
        <>
        <Container>
        <Grid container sx={{justifyContent:"center"}}>
            
            <Grid item sx={10} sm={10} md={6} lg={6}  >
            <Typography variant="h3" sx={{mt:5}} > Easy Scheduling & payments </Typography>
            <Box sx={{mt:5}}>
            <Typography variant="p" > 
            Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            </Typography>
            </Box>
            </Grid>

            <Grid item xs={10} sm={10} md={6} lg={6} sx={{textAlign:"center" }}>
                <Image src="/Easy payment to company.png" height={500} width={500}  objectFit='cover' alt='some value' />
            </Grid>

        </Grid>
        </Container>

        </>
     );
}
 
export default SectionFive;