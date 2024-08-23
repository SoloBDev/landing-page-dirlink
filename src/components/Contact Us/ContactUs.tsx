import { Box, Flex } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section id="contact-section" className='relative py-20 md:py-14 sm:py-10 xl:mt-16'>
      <svg
        className='absolute left-0 top-0 bottom-0 z-10 base:hidden lg:block'
        width='114'
        height='368'
        viewBox='0 0 114 368'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M28.7833 111.458C128.572 205.411 137.141 269.126 68.8527 402.382C-3.19561 501.193 -124.734 469.065 -110.749 354.257C-108.508 335.863 -117.871 220.669 -124.43 165.062C-2.02065 -213.438 148.228 -20.8829 28.7833 111.458Z'
          fill='url(#paint0_linear_39_374)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_39_374'
            x1='-67.1559'
            y1='454.69'
            x2='67.3467'
            y2='-47.2802'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#1488CC' />
            <stop offset='1' stop-color='#2B32B2' />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className='absolute right-0 top-0 bottom-0 z-10 base:hidden lg:block'
        width='289'
        height='368'
        viewBox='0 0 289 368'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M324 446V1.23926H305.147L101.948 -14C101.948 -14 164.5 29 177.362 92.6749C190.224 156.35 149.99 172.596 101.948 162.663C53.9069 152.729 13.9655 294.36 0 366.417L324 446Z'
          fill='url(#paint0_linear_39_371)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_39_371'
            x1='0'
            y1='216'
            x2='324'
            y2='216'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#1488CC' />
            <stop offset='1' stop-color='#2B32B2' />
          </linearGradient>
        </defs>
      </svg>

      <Box className="-mt-28">
        <Flex className=' flex-col justify-center items-center gap-8'>
          <Box p={2}>
            <h2 className='text-center text-4xl font-medium text-blue-1 sm:text-3xl'>
              Get In  <span className='text-blue-400'>Touch</span>
            </h2>
            <p className='mt-3 text-center'>
              Contact Us to know more about Our Services
            </p>
          </Box>

          <ContactForm />
        </Flex>
      </Box>
    </section>
  );
};

export default ContactUs;
