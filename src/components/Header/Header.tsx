import { Box, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const { colorMode } = useColorMode();

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(false);
      }
      if (window.scrollY !== 0) setIsTopOfPage(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        className={` ${
          colorMode === "dark"
            ? isTopOfPage
              ? `!bg-[#333] !bg-opacity-[0.6] backdrop-filter backdrop-blur-sm`
              : `!bg-[#2B2B2B] !bg-opacity-[0.4]`
            : isTopOfPage
            ? `!bg-[#e3e9ff] !bg-opacity-[0.6] backdrop-filter backdrop-blur-sm`
            : ` !bg-[#F0f0f0] !bg-opacity-[0.2]`
        } transition fixed top-0 z-30 w-Screen`}
      >
        <Navbar />
      </Box>
    </>
  );
};

export default Header;
