import {
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { sections } from "../Shared/type";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      width: "250px",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    closed: {
      width: "0px",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const handleMenuItemClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <Flex
        id='mobile-menu'
        justifyContent='flex-end'
        display={{ base: "flex", lg: "none" }}
        className=""
      >
        <Menu isOpen={isOpen} onClose={handleToggle} placement='bottom'>
          <MenuButton
            as={motion.button}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className='relative z-10'
          >
            {isOpen ? (
              <IoCloseOutline size={36} />
            ) : (
              <RxHamburgerMenu size={36} />
            )}
          </MenuButton>
          <MenuList
            as={motion.ul}
            variants={menuVariants}
            initial='closed'
            animate={isOpen ? "open" : "closed"}
            className=' -mt-16 !py-20 h-[100vh] rounded-none'
          >
            {sections.map((section) => (
              <MenuItem
                key={section.id}
                onClick={() => handleMenuItemClick(section.id)}
                className='!justify-center !py-3 mb-2 !no-underline child-one first:!bg-[#444] first:!bg-opacity-[0.2]'
              >
                {section.label}
              </MenuItem>
            ))}

            <MenuItem
              as={Link}
              className='!justify-center !py-3 mt-2 !no-underline '
            >
              <Button className='w-50 !px-8 !py-[22px]'>Contact Us</Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default MobileNav;
