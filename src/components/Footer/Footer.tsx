import ContactIcon from "./ContactIcon";
import FooterUS from "./FooterUS";
import LastFooter from "./LastFooter";
import UsefulLink from "./UsefulLink";

const Footer = () => {
  return (
    <>
      <footer className='relative w-full bg-[#5f55bf] bg-opacity-10 backdrop-blur-sm xl:z-[999] xl:-mt-7 2xl:mt-1'>
        <div className='grid md:grid-cols-4 sm:gap-10 px-10 pt-12 pb-20'>
          <FooterUS />
          <UsefulLink />
          <ContactIcon />
        </div>
        <LastFooter />
        <div className='footer-shadow overflow-x-hidden container'></div>
      </footer>
    </>
  );
};

export default Footer;
