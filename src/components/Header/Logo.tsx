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
      justifyContent={'start'}
      alignItems={{
        xl: "flex-start",
        lg: "flex-start",
        md: "center",
        base: "center",
      }}
      height={"100%"}
      marginLeft={{md: '2' , lg: '8', '2xl': '12'}}
    >
      <Box
        width={
          width || {
            base: '72px',
            lg: "140px",
            md: "80px",
            sm: "88px",
            xl: "140px",
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
