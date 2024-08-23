import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { faqsData } from "./faq-data";


export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Handler function to toggle FAQ item
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box id='faqs' className=" base:px-3 base:py-2 xss:p-8 xl:py-12 xl:px-20 2xl:px-40" bg='transparent'>
      <div className=' base:-mt-[22rem] 2xl:-mt-60 mb-20'>
        <h1 className='section-title text-center base:text-2xl xs:text-3xl md:text-[3rem] text-bold'>FAQs</h1>

        <div className='mt-12 grid gap-8'>
          {faqsData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};
