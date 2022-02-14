import Nav from "./Nav"
import SectionTwo from './SectionTwo'
import DeleveryContaent from './Delevery-Contaent'
import Footer from './Footer'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionFive from './Sec'
import SectionFour from './SectionFour'



const Combine = () => {
    return ( 
        <>
        <Nav />
        <SectionOne />
        <DeleveryContaent />
        <SectionThree />
        <SectionFive />
        <SectionTwo />
        {/* <SectionFour /> */}
        <Footer />
        </>
     );
}
 
export default Combine;