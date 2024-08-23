import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import QuoteIcon from "./QuoteIcon";

interface TestimonyProps {
  content: string;
  name: string;
  role: string;
  companyImage: string;
  delay: number;
}

const TestimonyCard = ({ content, name, role, companyImage, delay }: TestimonyProps) => {
  const { colorMode } = useColorMode();
  
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <SimpleGrid className='!flex flex-col justify-center items-center'>
        <Box
          className={`rounded-[32px] ${colorMode === "dark" ? "bg-[rgba(39,50,47,0.24)]" : "bg-[#e1dde7] bg-opacity-[0.2]"} base:gap-4 base:px-4 base:py-4 lg:px-6 lg:py-12 ld:gap-8 font-poppins `}
        >
          <QuoteIcon />
          <p className='base:p-3 lg:p-8 base:text-[12px] xs:text-sm lg:text-[16px] !leading-normal'>
            {content}
          </p>
          <div className='flex gap-2 base:ml-3 lg:ml-8'>
            <div className='overflow-hidden rounded-full base:w-10'>
              <img src={companyImage} alt='img' />
            </div>
            <div>
              <h4>{name}</h4>
              <p className='text-xs'>{role}</p>
            </div>
          </div>
        </Box>
      </SimpleGrid>
    </motion.div>
  );
};

export default TestimonyCard;
