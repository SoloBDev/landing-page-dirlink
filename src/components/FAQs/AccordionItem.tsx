import { useColorMode } from "@chakra-ui/react";

interface AccordionItemProps {
   question: string;
   answer: string;
   isOpen: boolean;
   onToggle: () => void;
 }

 export const AccordionItem = ({ question, answer, isOpen, onToggle }: AccordionItemProps) => {
   const {colorMode} = useColorMode();
   const filledColor = colorMode === 'dark' ? '#FEFEFE' : '#2B2B2B';
   return (
     <div
       className={`accordion-item ${isOpen ? 'active' : ''} border-b-[#ADB2B1] flex cursor-pointer flex-col gap-2 border-b pb-4`}
       onClick={onToggle}
     >
       <div className='accordion-trigger flex w-full items-center justify-between md:pr-5 mr-2'>
         <span className='text-2xl font-bold base:text-sm sm:text-xl'>{question}</span>
         <svg
           className={`accordion-img h-2 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
           viewBox='0 0 13 8'
           fill='none'
           xmlns='http://www.w3.org/2000/svg'
         >
           <path
             d='M6.50004 7.59904C6.36115 7.59904 6.22643 7.573 6.09587 7.52091C5.96532 7.46883 5.85698 7.39939 5.77087 7.31258L0.979207 2.52091C0.788235 2.32994 0.692749 2.08689 0.692749 1.79175C0.692749 1.49661 0.788235 1.25355 0.979207 1.06258C1.17018 0.871609 1.41324 0.776123 1.70837 0.776123C2.00351 0.776123 2.24657 0.871609 2.43754 1.06258L6.50004 5.12508L10.5625 1.06258C10.7535 0.871609 10.9966 0.776123 11.2917 0.776123C11.5868 0.776123 11.8299 0.871609 12.0209 1.06258C12.2118 1.25355 12.3073 1.49661 12.3073 1.79175C12.3073 2.08689 12.2118 2.32994 12.0209 2.52091L7.22921 7.31258C7.12504 7.41675 7.01219 7.49071 6.89067 7.53446C6.76914 7.57821 6.63893 7.59973 6.50004 7.59904Z'
             fill={filledColor}
           />
         </svg>
       </div>
 
       <div className={`accordion-content base:text-[12px] md:text-[16px] text-[#ADB2B1] ${isOpen ? 'block' : 'hidden'}`}>
         {answer}
       </div>
     </div>
   );
 };