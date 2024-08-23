import { Box } from "@chakra-ui/react";
import HeroText from "./HeroText";
import { useState, useEffect } from "react";

export const Home = () => {
  const [isLargeHeight, setIsLargeHeight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeHeight(window.innerHeight < 990);
    };

    // Initialize the state based on current height
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Box
        id='home'
        display='flex'
        flexDir={"column"}
        justifyContent={isLargeHeight ? "space-between" : "center"}
        alignItems={isLargeHeight ? "start" : "center"}
        color='white'
        p='12px'
        mt={"12px"}
      >
        <HeroText />
      </Box>
      <div className='shadow'></div>
    </>
  );
};
