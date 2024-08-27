import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import RegistrationForm, {
  RegistrationFormData,
} from "../components/register/RegisterForm";
import { Logo } from "../components/Shared";

interface RegistrationProps {
  dataSetter: (data: RegistrationFormData) => void;
}

function Registration({ dataSetter }: RegistrationProps) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem display={{ base: "none", lg: "block" }} colSpan={1}>
        <Box
          position="fixed"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          h={"100vh"}
        >
          <Box
            // bg={"pink"}
            width="300px"
          >
            <Logo />
          </Box>
          <Image
            // bg={"#3222C6"}
            src="./Layer 1.png"
            alt="Top Image"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="50vh"
            width="80vh"
          />
        </Box>
      </GridItem>
      <GridItem
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingLeft={"50px"}
        paddingRight={"50px"}
        bg={"#fff"}
        paddingTop={"70px"}
        zIndex={1}
        colSpan={{
          base: 2,
          lg: 1,
        }}
      >
        <Box>
          <Heading color="#3222c6">Register here!</Heading>
          <Text marginTop="15px" fontSize="lg" fontWeight="400">
            Let's get you all set up so you can access your Dirlink account
          </Text>
          <RegistrationForm onSubmission={() => {}} dataSetter={dataSetter} />
        </Box>
      </GridItem>
    </Grid>
  );
}
export default Registration;
