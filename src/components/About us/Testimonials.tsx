import { SimpleGrid } from "@chakra-ui/react";
import TestimonyCard from "./TestimonyCard";
import { testimonyData } from "./testimony-data";

const Testimonials = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, xl: 3 }}
      p={{ base: 1, sm: 4, md: 5, lg: 6, xl: 2 }}
      spacing={8}
      m={4}
      className="base:!mt-40 xl:!-mt-[36rem] 2xl:!mt-24"
    >
      {testimonyData.map((data, index) => (
        <TestimonyCard
          key={data.id}
          content={data.content}
          name={data.name}
          role={data.role}
          companyImage={data.companyImage}
          delay={index * 0.5}
        />
      ))}
    </SimpleGrid>
  );
};

export default Testimonials;
