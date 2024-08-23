import { Box, Flex, useColorMode } from "@chakra-ui/react";

const QuoteIcon = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box>
        {colorMode === "dark" ? (
          <Flex>
            <Box className='bg-[#33333f] inline-flex bg-opacity-[0.4] rounded-full base:w-10 base:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 xl:w-20 xl:h-[76px] xl:p-6 place-content-center'>
              <svg
                className='base:w-[16px] base:h-[12px] base:mt-2 sm:w-[22] sm:h-[24px] lg:w-[24px] lg:h-[26px] xl:-mt-2 '
                viewBox='0 0 24 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.4962 4.25098C3.62469 5.58431 3 12.251 3 12.251M3 12.251V16.5029C3 17.1981 3 17.5457 3.05736 17.8348C3.2937 19.026 4.22493 19.9573 5.41618 20.1936C5.70527 20.251 6.05289 20.251 6.74812 20.251V20.251C7.44335 20.251 7.79097 20.251 8.08006 20.1936C9.2713 19.9573 10.2025 19.026 10.4389 17.8348C10.4962 17.5457 10.4962 17.1981 10.4962 16.5029V16.251C10.4962 15.321 10.4962 14.856 10.394 14.4745C10.1166 13.4392 9.30797 12.6306 8.2727 12.3532C7.8912 12.251 7.42621 12.251 6.49624 12.251H3Z'
                  stroke='white'
                  stroke-width='1.5'
                ></path>
                <path
                  d='M21 4.25098C14.1285 5.58431 13.5038 12.251 13.5038 12.251M13.5038 12.251V16.5029C13.5038 17.1981 13.5038 17.5457 13.5611 17.8348C13.7975 19.026 14.7287 19.9573 15.9199 20.1936C16.209 20.251 16.5567 20.251 17.2519 20.251V20.251C17.9471 20.251 18.2947 20.251 18.5838 20.1936C19.7751 19.9573 20.7063 19.026 20.9427 17.8348C21 17.5457 21 17.1981 21 16.5029V16.251C21 15.321 21 14.856 20.8978 14.4745C20.6204 13.4392 19.8117 12.6306 18.7765 12.3532C18.395 12.251 17.93 12.251 17 12.251H13.5038Z'
                  stroke='white'
                  stroke-width='1.5'
                ></path>
              </svg>
            </Box>
          </Flex>
        ) : (
          <Flex>
            <Box className='bg-[#e1dde7] inline-flex bg-opacity-[0.4] rounded-full base:w-10 base:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-[76px] xl:p-6 place-content-center'>
              <svg
                className='base:w-[16px] base:h-[12px] base:mt-2 sm:w-[22] sm:h-[24px] lg:w-[24px] lg:h-[26px] xl:-mt-2 '
                viewBox='0 0 24 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.4962 4.25098C3.62469 5.58431 3 12.251 3 12.251M3 12.251V16.5029C3 17.1981 3 17.5457 3.05736 17.8348C3.2937 19.026 4.22493 19.9573 5.41618 20.1936C5.70527 20.251 6.05289 20.251 6.74812 20.251V20.251C7.44335 20.251 7.79097 20.251 8.08006 20.1936C9.2713 19.9573 10.2025 19.026 10.4389 17.8348C10.4962 17.5457 10.4962 17.1981 10.4962 16.5029V16.251C10.4962 15.321 10.4962 14.856 10.394 14.4745C10.1166 13.4392 9.30797 12.6306 8.2727 12.3532C7.8912 12.251 7.42621 12.251 6.49624 12.251H3Z'
                  stroke='#545454'
                  stroke-width='1.5'
                ></path>
                <path
                  d='M21 4.25098C14.1285 5.58431 13.5038 12.251 13.5038 12.251M13.5038 12.251V16.5029C13.5038 17.1981 13.5038 17.5457 13.5611 17.8348C13.7975 19.026 14.7287 19.9573 15.9199 20.1936C16.209 20.251 16.5567 20.251 17.2519 20.251V20.251C17.9471 20.251 18.2947 20.251 18.5838 20.1936C19.7751 19.9573 20.7063 19.026 20.9427 17.8348C21 17.5457 21 17.1981 21 16.5029V16.251C21 15.321 21 14.856 20.8978 14.4745C20.6204 13.4392 19.8117 12.6306 18.7765 12.3532C18.395 12.251 17.93 12.251 17 12.251H13.5038Z'
                  stroke='#545454'
                  stroke-width='1.5'
                ></path>
              </svg>
            </Box>
          </Flex>
        )}
        {/* <Image src={imageUrl} className="base:w-6 md:w-8 xl:w-12 base:translate-x-3 sm:translate-x-4 md:translate-x-6 xl:translate-x-0" /> */}
      </Box>
    </>
  );
};

export default QuoteIcon;