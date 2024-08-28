import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import RegistrationForm, {
  RegistrationFormData,
} from "../components/register/RegisterForm";
import { useState } from "react";
import { Logo } from "../components/Shared";

function Registration() {
  const [registerData, setRegisterData] =
    useState<RegistrationFormData | null>();

  return (
    <Grid templateColumns='0.8fr 1.2fr' >
      <GridItem display={{ base: "none", lg: "block" }} colSpan={1}>
        <Box
          position='fixed'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          h={"100vh"}
        >
          <Box width='300px'>
            <Logo />
          </Box>
          <Image
            src='./Layer 1.png'
            alt='Top Image'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='50vh'
            width='80vh'
            ml={8}
          />
        </Box>
      </GridItem>
      <GridItem
        bg={"#fff"}
        paddingTop={"12px"}
        zIndex={1}
        colSpan={{
          base: 2,
          lg: 1,
        }}
       
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width={{
              base: "85%",
              md: "75%",
              lg: "70%",
            }}
          >
            <Heading color='#3222c6'>Register here!</Heading>
            <Text marginTop='15px' fontSize='lg' fontWeight='400'>
              Let's get you all set up so you can access your Dirlink account
            </Text>
            <RegistrationForm
              dataSetter={setRegisterData}
              onSubmission={() => {
                console.log({ registerData });
              }}
            />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
export default Registration;
