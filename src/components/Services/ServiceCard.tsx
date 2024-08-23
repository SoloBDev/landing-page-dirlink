// serviceCard.tsx
import { Flex, Image, Text, useColorMode, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ContentProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard = ({ title, description, imageUrl }: ContentProps) => {
  const { colorMode } = useColorMode();

  const MotionFlex = motion(Flex);

  return (
    <MotionFlex
      className="base:gap-4 base:my-4 xs:gap-8 xs:w-[72%] md:w-[76%] lg:gap-10 lg:w-[90%]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {colorMode === 'dark' ? (
        <Flex>
          <Box className="bg-[#33333f] inline-flex bg-opacity-[0.2] rounded-full base:w-12 base:h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 xl:w-24 xl:h-[96px] xl:p-6 place-content-center">
            <Image src={imageUrl} className="base:w-6 md:w-8 xl:w-12 base:translate-x-3 sm:translate-x-4 md:translate-x-6 xl:translate-x-0" />
          </Box>
        </Flex>
      ) : (
        <Flex>
          <Box className="bg-[#e1dde7] bg-opacity-[0.3] rounded-full base:w-12 base:h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 xl:w-24 xl:h-[96px] xl:p-6 place-content-center">
            <Image src={imageUrl} className="base:w-6 md:w-8 xl:w-12 base:translate-x-3 sm:translate-x-4 md:translate-x-6 xl:translate-x-0" />
          </Box>
        </Flex>
      )}
      <Box className='md:mt-1 xl:mt-2'>
        <Text className="font-poppins font-semibold base:text-[15px] sm:text-lg md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[44px] mb-3 3xl:mb-6">{title}</Text>
        <Text className="font-poppins font-light base:text-xs sm:text-sm md:text-lg lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-4xl text-[#999]">{description}</Text>
      </Box>
    </MotionFlex>
  );
}

export default ServiceCard;
