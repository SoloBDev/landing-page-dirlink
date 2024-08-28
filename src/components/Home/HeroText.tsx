import {
  Text,
  Image,
  SimpleGrid,
  GridItem,
  Flex,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeroText = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <SimpleGrid columns={{ base: 1, lg: 2 }} marginTop={12}>
        <GridItem>
          <Flex className='flex-col base:justify-center base:items-center lg:justify-start lg:items-start '>
            <Text className='text-[#4823ec] base:!text-center base:mt-8 base:text-[26px] base:w-100% xss:text-[32px] xs:text-[42px] xs:p-4 sm:text-[50px] md:text-[60px]  lg:!text-left lg:text-[48px]  lg:w-[112%] font-semibold mt-20 3xl:mt-28 3xl:text-[80px] '>
              Empower Your Delivery Operations with Our SeamLess Dashboard
            </Text>

            <Text
              className={`${
                colorMode === "dark" ? `text-[#c7c7c7]` : ` text-[#545454]`
              }  base:text-[13px] base:mt-10 xss:text-[16px] xs:text-[24px] sm:text-[28px] sm:px-4 md:text-[34px] md:mt-16 lg:mt-10 lg:text-[20px] lg:w-[90%] xl:text-[26px] 2xl:text-[28px]  3xl:text-[52px]   py-4 base:px-6 xss:px-2 lg:px-2 base:text-center lg:text-left`}
            >
              Join our platform and take control of your deliveries, customers,
              and operations with ease
            </Text>
            <Button
              className={`${
                colorMode === "dark" ? `!bg-[#5518ff]` : `!bg-[#4619ca]`
              } text-[32px] base:w-[60%] base:my-6 xss:my-10 base:!h-12 2xl:h-16  sm:w-[40%] w-72  lg:ml-6`}
            >
              <Link
                to='/register'
                // href="../../pages/Registeration.tsx"
                className='text-white 3xl:text-[32px]'
              >
                Get Started
              </Link>
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          w={{ base: "100%", lg: "140%", "2xl": "100%" }}
          className={
            "relative base:-left-10 base:-top-60 xss:-top-[19rem] base:-z-10  base:opacity-[0.2] sm:-top-96 md:-top-[30em]  lg:-left-60 lg:top-0 lg:opacity-100 xl:-top-4 xl:-left-80 3xl:top-0"
          }
        >
          <Image src='./bg1.png' w={{ base: "100%", lg: "120%" }} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default HeroText;
