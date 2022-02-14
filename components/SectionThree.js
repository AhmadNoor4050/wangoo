import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Image from 'next/image'
const SectionThree = () => {
    return ( 
<Container>

<Grid container sx={{textAlign:"center" }} >
    <Grid item xs={12}>    
    <Typography variant="h3">How Our Appication Work</Typography>
    <Typography variant="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
 malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse

    </Typography>
    </Grid>

    <Grid item xs={12} sx={{width: '100%', height: '100%', position: 'relative' ,mt:5}}>
    <Image src="/Screen.png" height={800} width={1350} objectFit='cover'  alt='some value'  />
    </Grid>

    {/* <div>
  <Image
    alt='Mountains'
    src='/user booking process.png'
    layout='fill'
    objectFit='cover'
  />
</div> */}



</Grid>
</Container>
     );
}
 
export default SectionThree;