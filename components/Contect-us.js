import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
const ContectUs = () => {
    return ( 
        <>
        <Box sx={{display:"flex", justifyContent:"row"}}>

        <Image src="/icons8_down_arrow_96px.png"  height="20" width="30" alt='some value' />
        <Typography> Contect Us</Typography>
        <Typography> Contect Us</Typography>

        </Box>
        </>
     );
}
 
export default ContectUs;