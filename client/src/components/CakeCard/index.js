import { Box, Image, Text, useColorMode } from "@chakra-ui/react";

const CakeCard = ({ name, description, image }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.300", dark: "gray.700" };

  return (
    <Box
      w={["100%", "45%", "48%", "30%"]}
      overflow="hidden"
      rounded="10px"
      borderColor={colorMode === "light" ? "black" : "white"}
      borderWidth="2px"
      my="10px"
      bg={bgColor[colorMode]}
    >
      <Image
        src={`/images/${image}`}
        alt={name}
        fit="cover"
        align="20% 50%"
        h="200px"
        w="100%"
      />
      <Box w="90%" mx="auto">
        <Text as="h2" fontWeight="semibold" fontSize="xl">
          {name}
        </Text>
        <Text noOfLines={3}>{description}</Text>
      </Box>
    </Box>
  );
};

export default CakeCard;
