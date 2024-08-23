import {
  Box,
  FormControl,
  FormErrorMessage,
  Textarea,
  Input,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().nonempty("Full name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  subject: z.string().nonempty("Subject is required"),
  message: z.string().nonempty("Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { colorMode } = useColorMode();
  const mycolor = colorMode === "dark" ? "#F5F5F5" : "#3D3D3D";
  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };
  return (
    <>
      <Box className='w-[60%]  rounded-md relative z-20'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            className=''
            flexDir={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box flex={2} marginRight={6}>
              <FormControl isInvalid={!!errors.fullName} mb={4}>
                <Input
                  border={"2px"}
                  borderColor='#AAA'
                  color={mycolor}
                  focusBorderColor={"#3221c5"}
                  mt={2}
                  py={5}
                  placeholder='Full Name'
                  className='tracking-wider'
                  id='fullName'
                  {...register("fullName")}
                />
                <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email} mb={4}>
                <Input
                  border={"2px"}
                  borderColor='#AAA'
                  color={mycolor}
                  focusBorderColor={"#3221c5"}
                  mt={2}
                  py={5}
                  placeholder='Email Address'
                  className='tracking-wider'
                  id='email'
                  {...register("email")}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.subject} mb={4}>
                <Input
                  border={"2px"}
                  borderColor='#AAA'
                  color={mycolor}
                  focusBorderColor={"#3221c5"}
                  mt={2}
                  py={5}
                  placeholder='Subject '
                  className='tracking-wider'
                  id='subject'
                  {...register("subject")}
                />
                <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
              </FormControl>
            </Box>

            <FormControl isInvalid={!!errors.message} mb={4} flex={2}>
              <Textarea
                border={"2px"}
                focusBorderColor={"#3221c5"}
                borderColor='#AAA'
                color={mycolor}
                mt={2}
                placeholder='Message'
                className='tracking-wider'
                height={44}
                id='message'
                {...register("message")}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>
          </Flex>

          {/* isLoading={isSubmitting} */}
          <Box className='flex justify-center'>
            <button
              type='submit'
              className={`${
                colorMode === "dark" ? `text-[#F5F5F5]` : "text-[#3D3D3D] "
              } mt-4 p-2 border-2 border-[#3221c5] hover:bg-[#3221c5] hover:text-[#F5F5F5] active:bg-[#3221c5] active:text-[#F5F5F5] focus:bg-[#3221c5] focus:text-[#F5F5F5] font-regular text-xl xl:w-[30%] w-40 tracking-widest py-3 rounded-full focus:outline-none active:outline-none `}
            >
              Submit
            </button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
