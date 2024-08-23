import { HStack, Switch, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
   const { toggleColorMode, colorMode } = useColorMode();
   const changeText = () => {
      toggleColorMode();
   }
  return (
    <HStack >
    <Switch
      id='mode'
      isChecked={colorMode === "dark"}
      onChange={changeText}
      
    />
    </HStack>
  )
}

export default ColorModeSwitch