import { Box, SimpleGrid } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import { cardContent } from "./card-content";

export const Services = () => {
  return (
    <Box id='services' p='8'>
      <h1 className='text-center text-bold font-poppins base:text-[24px] xss:text-[30px] xs:text-[33px] sm:text-[36px] md:text-5xl lg:text-[56px] lg:mt-8 xl:text-[3em] 2xl:text-[4rem] 3xl:text-[5rem]'>
        What Do We <span className='text-[#3221c5]'>Offer ?</span>{" "}
      </h1>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        justifyContent={"center"}
        alignItems={"center"}
        className='base:py-12 base:px-4 base:!flex  base:!flex-col base:columns-1 lg:!grid lg:gap-10 lg:py-16 xl:px-16 xl:gap-12 xl:ml-16 '
      >
        {cardContent.map((data) => (
          <ServiceCard
            key={data.id}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
