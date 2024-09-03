import { Box, useColorMode, VStack } from "@chakra-ui/react";

export const Footer = () => {
  const { colorMode } = useColorMode(); //차크라에서 제공하는 훅
  const isDark = colorMode === "light" ? "#ebf7f9" : "gray.800";

  return (
    <VStack
      fontSize="14px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxW="450px"
      h="70px"
      margin="0 auto"
      textAlign="center"
      bg={isDark}
    >
      <Box fontSize="14px">&copy; Minzy Kim | 2024 </Box>
    </VStack>
  );
};
