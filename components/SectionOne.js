import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Image from "next/image"
import styles from "../styles/Home.module.css"
const SectionOne = () => {
    return ( 
        <section>
            <Container>
                <Grid container sx={{display:"flex" , flexWrap:"wrap", justifyContent:"center" }}>
                    <Box sx={{height:350, width:350, mt:10 }}>
                    <Typography variant="h2" sx={{fontWeight:"fontWeightMedium"}}>
                             Quick & Fast Delivery in safest way           
                         </Typography>
                         <Typography variant="p" sx={{color:"gray"}}>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
                         </Typography>
                    </Box>
                    <Box sx={{justifyContent:"center" , textAlign:"center", mt:5 }} className={styles.imag}  >
                        <Image src="/Group 2234.png" height={400} width={750} objectFit="cover" alt="some value" />
                    </Box>



            <Box sx={{justifyContent:"center", textAlign:"center", mt:10, mr:10 }} className={styles.imag}  >
            <Image src="/Group 2233.png" height={400} width={670}  objectFit='cover' alt='some value' />
            </Box>

            <Box sx={{height:300, width:350, mt:5 }}>
            <Typography variant="p" sx={{color:"orange"}}>About Us</Typography>
        <Typography variant="h3">We are the Best in Your Area</Typography>
        <Typography variant="p" sx={{lineHeight:2}}>
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with         </Typography>
                    </Box>


                </Grid>
            </Container>
        </section>
             );
}
 
export default SectionOne;


 

