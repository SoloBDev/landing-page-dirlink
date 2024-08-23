import { Flex, Image, Text } from "@chakra-ui/react"
const FooterUS = () => {
  return (
    <>
      <div className="max-w-[285px] sm:col-span-2 sm:max-w-full md:px-2">
                    <Flex className="gap-4">
                    <Image src={'./favicon-16x16.png'} alt="Logo" className="lg:w-12" />
                    <Text className="lg:text-xl font-semibold mt-3">DirLink</Text>
                    </Flex>
                    <p className="my-6 text-gray-3 base:text-[14px] md:text-[16px] md:w-[60%]">
                    DirLink is passionate about transforming the delivery industry. With a focus on innovation and customer satisfaction
                    </p>
                    
                </div>
    </>
  )
}

export default FooterUS