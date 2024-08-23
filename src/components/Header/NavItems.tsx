import { useState, useEffect } from "react";
import { sections } from "../Shared/type";
import { Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-scroll";

const NavItems = () => {
  const LinkCss =
    "hover:text-lightblue text-base  transition-colors hover:text-blue-2   dark:hover:text-[#8c7fff] lg:text-lg lg:text-[24px] xl:text-2xl 2xl:text-3xl";

  const [activeSection, setActiveSection] = useState<string>("home");
  const { colorMode } = useColorMode();

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 10; // Adjust for header height
    const sectionOffsets = sections.map((section) => {
      const element = document.getElementById(section.id);
      return element ? element.offsetTop : 0;
    });

    const currentSectionIndex = sectionOffsets.findIndex(
      (offset, index) =>
        scrollPosition >= offset &&
        (index === sections.length - 1 ||
          scrollPosition < sectionOffsets[index + 1])
    );

    setActiveSection(sections[currentSectionIndex].id);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTextColor = colorMode === "light" ? "#3221c5" : "#d7498f";

  return (
    <>
      <ul
        id='menu'
        className=' animate-fadeIn gap-4 lg:gap-8 xl:gap-12  2xl:gap-28 sm:justify-start hidden lg:flex'
      >
        {sections.map((section) => (
          <Text
            key={section.id}
            as={Link}
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            fontWeight={activeSection === section.id ? "semibold" : "normal"}
            color={activeSection === section.id ? `${activeTextColor}` : ""}
            cursor='pointer'
            className={LinkCss}
          >
            {section.label}
          </Text>
        ))}
      </ul>
    </>
  );
};

export default NavItems;
