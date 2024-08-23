import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
        onClick={goToTop}
        bg='#d70d8e'
        color="white"
        // borderRadius="full"
        boxShadow="md"
        _hover={{ bg: "#c70d80" }}
        className="!fixed bottom-5 right-5 z-[999] text-white"
      >
        <ArrowUpToLine className="base:h-6   2xl:h-10 base:w-6 2xl:w-10" />
      </Button>
      )}
    </>
  );
};