import { Text } from "@chakra-ui/react"
import { ReactNode } from "react";
interface Props {
   children: ReactNode;
}
const TextCount = ({children}: Props) => {
  return (
    <>
      <Text className="text-[#D71A84] base:text-[2em] md:text-[72px] font-bold ">{children}</Text>
    </>
  )
}


export default TextCount;
