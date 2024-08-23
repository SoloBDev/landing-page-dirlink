import {
   Box,
   Text,
   GridItem,
   SimpleGrid,
   useColorMode,
 } from "@chakra-ui/react";
 import { useState, useEffect, useRef } from "react";
 import TextCount from './TextCount'

const AutoCount = () => {
   const [companyNumber, setCompanyNumber] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
  const [deliveredItems, setDeliveredItems] = useState(0);
  const [partnerRetentionRate, setPartnerRetentionRate] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const targetCompanyNumber = 250;
  const targetCustomerSatisfaction = 98;
  const targetDeliveredItems = 10;
  const targetPartnerRetentionRate = 90;

  const duration = 2000; // Total time for the counts to complete (in milliseconds)
  const steps = 100; // Number of increments

  const customerStep = targetCompanyNumber / steps;
  const companyStep = targetCustomerSatisfaction / steps;
  const deliveredStep = targetDeliveredItems / steps;
  const partnerStep = targetPartnerRetentionRate / steps;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasStarted) {
      let stepCount = 0;

      intervalRef.current = setInterval(() => {
        setCompanyNumber((prev) => prev + customerStep);
        setCustomerSatisfaction((prev) => prev + companyStep);
        setDeliveredItems((prev) => prev + deliveredStep);
        stepCount += 1;
        setPartnerRetentionRate((prev) => prev + partnerStep);

        if (stepCount >= steps) {
          clearInterval(intervalRef.current!);
          setCompanyNumber(targetCompanyNumber);
          setCustomerSatisfaction(targetCustomerSatisfaction);
          setDeliveredItems(targetDeliveredItems);
          setPartnerRetentionRate(targetPartnerRetentionRate);
        }
      }, duration / steps);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
      ref={sectionRef}
      className={`w-full shadow-md rounded-none p-4 ${
        colorMode === "dark"
          ? `bg-[#444] bg-opacity-[0.1]`
          : `bg-[#CCC] bg-opacity-[0.2]`
      } base:p-4 base:-mt-32 xss:-mt-40 md:p-8 lg:p-12 lg:mt-0 xl:mt-8 mb-20`}
    >
      <SimpleGrid columns={{base:2 , lg:4}} marginLeft={2} justifyContent={'center'} alignItems={'center'} gap={{base:10, md:12 , lg:4}} >
        <GridItem className="flex flex-col items-center justify-center">
          <TextCount>{Math.round(companyNumber)}+</TextCount>
          <Text fontWeight='semibold' className="base:text-[12px] md:text-[16px] ">Company Number</Text>
        </GridItem>
         <GridItem className="flex flex-col items-center">
          <TextCount>{Math.round(customerSatisfaction)}%</TextCount>
          <Text fontWeight='semibold' className='!w-32 !text-center base:text-[12px] md:text-[16px] '>
            Customer Satisfaction Rate
          </Text>
        </GridItem>
         <GridItem className="flex flex-col items-center">
          <TextCount>{Math.round(deliveredItems)}K+</TextCount>
          <Text fontWeight='semibold' className='!w-28 !text-center base:text-[12px] md:text-[16px] '>
            Deliveries Managed
          </Text>
        </GridItem>
         <GridItem className="flex flex-col items-center">
          <TextCount>{Math.round(partnerRetentionRate)}%</TextCount>
          <Text fontWeight='semibold' className='!w-28 !text-center base:text-[12px] md:text-[16px] '>
            Partner Retention Rate
          </Text>
        </GridItem>
      </SimpleGrid>
    </Box>
    </>
  )
}

export default AutoCount;