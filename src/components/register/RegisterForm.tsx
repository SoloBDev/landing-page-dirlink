import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";

import FileUpload from "./uploadfile";
import { TextInput } from "../Shared";

export interface RegistrationFormData {
  companyName: string;
  serviceType: string;
  transportType: string;
  TIN: string;
  companyAddress: string;
  companyPhone: string;
  contactPersonName: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  contactPersonGender: string;
  supportDocument: File | null;
}

interface RegistrationProps {
  dataSetter: (data: RegistrationFormData) => void;
  onSubmission: () => void;
}

function RegistrationForm({
  dataSetter: setData,
  onSubmission,
}: RegistrationProps) {
  return (
    <Formik
      initialValues={{
        companyName: "",
        serviceType: "",
        transportType: "",
        TIN: "",
        companyAddress: "",
        companyPhone: "",
        contactPersonName: "",
        contactPersonPhone: "",
        contactPersonEmail: "",
        contactPersonGender: "",
        supportDocument: null as File | null,
      }}
      onSubmit={(values, actions) => {
        setData(values);
        onSubmission();
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, touched, errors, handleChange, values, setValues }) => (
        <Form>
          <FormControl
            isInvalid={!!errors.companyName && !!touched.companyName}
            isRequired
          >
            <Text fontSize={"18"} fontWeight={"bold"} marginTop={"20px"}>
              Company Detail
            </Text>
            <FormLabel marginTop={"15px"} fontSize={"lg"}>
              Company Name
            </FormLabel>
            <TextInput
              name="companyName"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                setData({ ...values, companyName: e.target.value });
              }}
              placeholder="company name"
            />
            <FormErrorMessage>{errors.companyName}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={!!errors.serviceType && !!touched.serviceType}
            isRequired
          >
            <FormLabel fontSize={"lg"} marginTop={"15px"}>
              Service Type
            </FormLabel>

            <RadioGroup
              onChange={(e: string) => {
                setValues({ ...values, serviceType: e });
                setData({ ...values, serviceType: e });
              }}
              aria-labelledby="serviceType"
              name="serviceType"
              fontWeight={"600"}
            >
              <HStack spacing="30px">
                <Radio
                  type="radio"
                  key={"city"}
                  name="serviceType"
                  value="city"
                >
                  City only
                </Radio>

                <Radio
                  key={"domestic"}
                  type="radio"
                  name="serviceType"
                  value="domestic"
                >
                  Domestic
                </Radio>

                <Radio
                  key={"international"}
                  type="radio"
                  name="serviceType"
                  value="international"
                >
                  International
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl
            isInvalid={!!errors.transportType && !!touched.transportType}
            isRequired
          >
            <FormLabel
              as="legend"
              marginTop={"20px"}
              padding={"10px"}
              fontSize={"lg"}
            >
              Trasport Type
            </FormLabel>
            <RadioGroup
              onChange={(e: string) => {
                setValues({ ...values, transportType: e });
                setData({ ...values, transportType: e });
              }}
              name="transportType"
              padding={"10px"}
              fontWeight={"600"}
            >
              <HStack spacing="24px">
                <Radio key="cycle" name="transportType" value="motor">
                  Motor Cycle
                </Radio>

                <Radio key="automobile" name="transportType" value="Automobile">
                  Automobile
                </Radio>
                <Radio key="cargo" name="transportType" value="Cargo car">
                  Cargo
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl isInvalid={!!errors.TIN && !!touched.TIN} isRequired>
            <FormLabel marginTop={"15"}>TIN</FormLabel>
            <TextInput
              name="TIN"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                setData({ ...values, TIN: e.target.value });
              }}
              placeholder="Enter TIN"
            />
          </FormControl>

          <Grid
            templateColumns="repeat(2, 2fr)"
            gridTemplateRows="repeat(2,2fr)"
            gap={8}
          >
            <GridItem w="100%" h="10">
              <FormControl
                isInvalid={!!errors.companyAddress && !!touched.companyAddress}
                isRequired
              >
                <FormLabel marginTop={"15"}>Company Address</FormLabel>
                <TextInput
                  name="companyAddress"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setData({ ...values, companyAddress: e.target.value });
                  }}
                  placeholder="company address"
                />
              </FormControl>
            </GridItem>

            <GridItem w="100%" h="10">
              <FormControl
                isInvalid={!!errors.companyPhone && !!touched.companyPhone}
                isRequired
              >
                <FormLabel marginTop={"15"}>Company phone no</FormLabel>
                <TextInput
                  name="companyPhone"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setData({ ...values, contactPersonPhone: e.target.value });
                  }}
                  placeholder="company phone no"
                />
              </FormControl>
            </GridItem>
          </Grid>

          <Text fontSize={"20"} fontWeight={"bold"} marginTop={"20px"}>
            Contact Person
          </Text>

          <Grid
            templateColumns="repeat(2, 2fr)"
            gridTemplateRows="repeat(2,2fr)"
            gap={8}
          >
            <GridItem w="100%" h="10">
              <FormControl
                isInvalid={
                  !!errors.contactPersonName && !!touched.contactPersonName
                }
                isRequired
              >
                <FormLabel marginTop={"15"}>Full Name</FormLabel>
                <TextInput
                  name="contactPersonName"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setData({ ...values, contactPersonName: e.target.value });
                  }}
                  placeholder="Full Name"
                />
              </FormControl>
            </GridItem>

            <GridItem w="100%" h="10">
              <FormControl
                isInvalid={
                  !!errors.contactPersonPhone && !!touched.contactPersonPhone
                }
                isRequired
              >
                <FormLabel marginTop={"15"}>Phone no</FormLabel>
                <TextInput
                  name="contactPersonPhone"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setData({ ...values, contactPersonPhone: e.target.value });
                  }}
                  placeholder="Enter Phone number"
                />
              </FormControl>
            </GridItem>
          </Grid>

          <Grid
            templateColumns="repeat(2, 2fr)"
            gridTemplateRows="repeat(2,2fr)"
            gap={8}
          >
            <GridItem w="100%" h="10">
              <FormControl
                isInvalid={
                  !!errors.contactPersonEmail && !!touched.contactPersonEmail
                }
                isRequired
              >
                <FormLabel marginTop={"15"}>Email</FormLabel>
                <TextInput
                  name="contactPersonEmail"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setData({ ...values, contactPersonEmail: e.target.value });
                  }}
                  placeholder="Email"
                />
              </FormControl>
            </GridItem>

            <GridItem w="100%" h="10">
              <FormControl
                isInvalid={
                  !!errors.contactPersonGender && !!touched.contactPersonGender
                }
                isRequired
              >
                <FormLabel margin={"15px"}>Gender</FormLabel>
                <RadioGroup
                  onChange={(e: string) => {
                    setValues({ ...values, contactPersonGender: e });
                    setData({ ...values, contactPersonGender: e });
                  }}
                  name="contactPersonGender"
                  fontWeight={"600"}
                >
                  <HStack spacing="30px">
                    <Radio key={"male"} name="contactPersonGender" value="male">
                      Male
                    </Radio>
                    <Radio
                      key={"female"}
                      name="contactPersonGender"
                      value="female"
                    >
                      Female
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </GridItem>
          </Grid>

          <FileUpload
            name="supportDocument"
            handleChanged={(file) => {
              setValues({ ...values, supportDocument: file });
              setData({ ...values, supportDocument: file });
            }}
          />

          <Button
            display={"block"}
            float={"right"}
            marginRight={"20px"}
            marginBottom={"20px"}
            mt={4}
            bg={"#3222c6"}
            color={"white"}
            isLoading={isSubmitting}
            type="submit"
            width={"30vh"}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default RegistrationForm;
