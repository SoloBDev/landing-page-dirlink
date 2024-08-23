import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import ColorModeSwitch from "./ColorModeSwitch";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)", // Adjust breakpoint as needed
  });

  return (
    <>
      <Flex className='w-screen p-4 items-center !justify-between'>
        <Box>
          <Logo />
        </Box>
        <NavItems />
        {isDesktopOrLaptop ? (
          <>
            <Box className='grouped-lg sm:w-[60px]'>
              <ColorModeSwitch />
            </Box>
            <Box>
              <Button
                className='border !text-gray-900 !bg-[#ff5798] !border-[#ff76ad]  2xl:p-8 xl:!h-16 xl:!px-12 !rounded-none hover:!bg-[#ff0d8e] mr-6'
                fontSize={{ base: "14px", lg: "20px", "2xl": "36px" }}
                p={{ "2xl": "32px" }}
                visibility={{ base: "hidden", lg: "visible" }}
                justifyContent={{
                  sm: "end",
                }}
                as='a'
                href='#contact-section'
              >
                Contact Us
              </Button>
            </Box>
            {/* mobile navigation */}
            <Box className='lg:hidden grouped-lg lg:w-[10%]'>Mobile</Box>
          </>
        ) : (
          <Flex gap={8} paddingX={4}>
            <HStack className='grouped-lg sm:w-[60px]'>
              <ColorModeSwitch />
            </HStack>
            <Box className='lg:hidden grouped-lg lg:w-[10%]'>
              <MobileNav />
            </Box>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
