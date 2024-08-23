import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#1F1F1F",
      900: "#1A1E1C",
    },
  },
  screens: {
    '3xl': '2176px',
    '2xl': '1536px',
    xl: '1280px',
    lg: '1024px',

    md: '768px',
    sm: '640px',
    xs: '475px',
    xss: '375px',
    base: '0px',

  },
  components: {
    Switch: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      baseStyle: (props: { isChecked: any; }) => ({
        track: {
          bg: props.isChecked ? '#4d21f1' : 'gray.200',
          height: '21px', // Adjust track height
          width: '52px', // Adjust track width
          borderRadius: '20px', 
          // Adjust track border radius
          
        },
        thumb: {
          width: '20px', // Adjust thumb width
          height: '20px', // Adjust thumb height
          borderRadius: 'full',
          marginLeft: props.isChecked ? '16px' : '2px',
        },
      }),
    },
  },
});

export default theme;
