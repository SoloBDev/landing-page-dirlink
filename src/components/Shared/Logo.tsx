import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/dirlink_logo.png";
interface LogoProps {
  boxWidth?: string;
  width?: string;
}

function Logo({ width, boxWidth }: LogoProps) {
  return (
    <Box
      width={boxWidth || "100%"}
      display={"flex"}
      justifyContent={{
        xl: "center",
        lg: "center",
        md: "center",
        base: "center",
      }}
      alignItems={{
        xl: "flex-start",
        lg: "flex-start",
        md: "center",
        base: "center",
      }}
      height={"100%"}
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
