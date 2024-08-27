import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface TextInputProps {
  placeholder: string;
  type?: string;
  bgColor?: string;
  name?: string;
  onChange?: ChangeEventHandler;
}

function TextInput({
  placeholder,
  type,
  bgColor,
  name,
  onChange,
}: TextInputProps) {
  return (
    <Input
      name={name}
      onChange={onChange}
      fontSize={{ base: "smaller", md: "xl", lg: "xl" }}
      fontWeight={{ base: "100", md: "200", lg: "400" }}
      height={{ base: "40px", md: "47px", lg: "50px" }}
      type={type || "text"}
      variant="filled"
      bgColor={bgColor}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
