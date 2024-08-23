import { Box, Text, Image, useColorMode } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import eclipse from "../../assets/Ellipse 6.svg";

const OurMission = () => {
  const { colorMode } = useColorMode();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 10% of the component is in view
  });
  
  const boxVariants = {
    hidden: { opacity: 0, x: "-10vw" },
    visible: {
      opacity: 1,
      x: '0vw',
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  

  return (
    <>
      <Box
        as={motion.div}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        className="relative w-full bg-[#5f55bf] bg-opacity-10 backdrop-blur-sm"
      >
        <Box className="xss:px-4 md:px-8 base:py-4 md:w-[88%] xl:py-16 xl:w-[72%]">
          <h1
            className={` base:ml-4 base:text-xl base:mt-4 sm:text-2xl md:text-4xl lg:ml-0 font-bold :text-4xl ${
              colorMode === "dark" ? `text-[#4435cb]` : ` text-[#3221c5]`
            }`}
          >
            Our Mission
          </h1>
          <Text
            className={`${
              colorMode === "dark" ? `text-[#c7c7c7]` : ` text-[#545454]`
            } font-poppins base:w-[100%] base:text-[12px] base:mt-10 xss:text-[14px] xs:text-lg sm:text-[20px] sm:px-4 md:text-[22px] md:mt-16 lg:mt-10 lg:text-[20px] lg:w-[90%] xl:text-[xl] 2xl:text-[24px]  3xl:text-[32px]   py-4 base:px-6 xss:px-2 lg:px-2 base:text-left !leading-relaxed `}
          >
            Our mission is to make delivery operations more efficient, transparent, and customer-focused. We believe that every delivery company, big or small, deserves the tools to succeed in a competitive market.
          </Text>
        </Box>
      </Box>
      <Image
        src={eclipse}
        className="relative -top-[18rem] left-[25.6rem] -z-10 base:hidden xl:block 2xl:hidden"
      />
    </>
  );
};

export default OurMission;
