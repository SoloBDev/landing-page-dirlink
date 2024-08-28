import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/dirlink_logo.png";
interface LogoProps {
  boxWidth?: string;
  width?: string;
}

function Logo({ width, boxWidth }: LogoProps) {
  return (
    <Box
      width={boxWidth || "70%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      pb={20}
      ml={8}
    >
      <Box
        width={
          width || {
            lg: "350px",
            md: "350px",
            sm: "200px",
            xl: "350px",
          }
        }
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          userSelect: "none",
        }}
      >
        <Image width={"100%"} src={logo} />
      </Box>
    </Box>
  );
}

export default Logo;
