import { Box, } from "@chakra-ui/react";
import { AboutCard } from "./AboutCard";
import Testimonials from "./Testimonials";
import OurMission from "./OurMission";

export const AboutUs = () => (
  <>
  <Box
    id='about-us'
    display={'flex'}
    flexDir={'column'}
    justifyContent='center'
    alignItems='center'
    
  >
   
    <AboutCard />
    <OurMission />
    <Testimonials />
  </Box>
  <div className='sticky-shadow'></div>
   
   </>
);
