import { Statistics } from "./Statistics";
import aboutDeli from "../../assets/about-deli.png";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";

export const AboutCard = () => {
   const {colorMode} = useColorMode();
  return (
    <section
      id="about"
      className="base:-mt-16 py-24 sm:py-32 "
    >
      <motion.div
        className={`${colorMode === "dark"
          ? `bg-[#444] bg-opacity-[0.1]`
          : `bg-[#CCC] bg-opacity-[0.2]`
      } border rounded-lg py-12`}
        initial={{ scale: 0.5, opacity: 0 }} 
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        viewport={{ once: true }}
      >
        <div className="base:px-2  xs:px-6 flex flex-col-reverse lg:flex-row base:gap-2 xs:gap-8 md:gap-8 lg:gap-12 justify-center items-center">
          <img
            src={aboutDeli}
            alt="About Company"
            className="w-[360px] h-[320px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="base:text-[18px] xss:text-[26px] xs:text-3xl md:text-4xl font-bold sm:pb-6 base:text-center lg:text-left xl:pb-2">
                <span className="bg-gradient-to-r from-[#7038ff]/60 to-[#5b25e3] text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="base:text-sm xs:text-lg sm:text-[20px] md:text-[22px] text-muted-foreground base:px-4 lg:px-2 mt-4 ">
                Founded in 2024, <span className="font-medium text-[#3d2dcd]">Dir</span><span className="font-medium text-[#aa477d]">Link</span> began with a vir5sion to revolutionize the delivery industry. What started as a small project has grown into a leading platform used by hundreds of delivery companies across the city.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
