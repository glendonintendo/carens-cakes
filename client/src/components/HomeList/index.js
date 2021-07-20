import { Flex, Box, Text, Icon, Divider, useColorMode } from "@chakra-ui/react";
import { AiFillSmile } from "react-icons/ai";
import { HiEye } from "react-icons/hi";
import { GoPackage } from "react-icons/go";

const HomeList = () => {
  const { colorMode } = useColorMode();
  const inputBorder = { light: "gray.500", dark: "gray.200" };
  const bgColor = { light: "gray.200", dark: "gray.700" };

  return (
    <Flex
      mt="5vh"
      mx="auto"
      w={["80vw", "80vw", "90vw", "70vw"]}
      direction={["column", "column", "row", "row"]}
      bg={bgColor[colorMode]}
      h={["auto", "auto", "275px", "250px", "200px"]}
      p="4px"
    >
      <Flex align="center">
        <Box mx="2">
          <Icon as={HiEye} boxSize={20} />
        </Box>
        <Box m="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Browse
          </Text>
          <Text as="h3" fontSize="lg" fontWeight="light">
            We offer cakes of all shapes, flavors, and styles. We are sure to
            have what you want!
          </Text>
        </Box>
      </Flex>

      <Divider orientation="vertical" borderColor={inputBorder[colorMode]} />

      <Flex align="center">
        <Box mx="2">
          <Icon as={GoPackage} boxSize={20} />
        </Box>
        <Box m="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Order
          </Text>
          <Text as="h3" fontSize="lg" fontWeight="light">
            Our simple order form makes it easy to get just what you want
            without all the fuss!
          </Text>
        </Box>
      </Flex>

      <Divider orientation="vertical" borderColor={inputBorder[colorMode]} />

      <Flex align="center">
        <Box mx="2">
          <Icon as={AiFillSmile} boxSize={20} />
        </Box>
        <Box m="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Enjoy
          </Text>
          <Text as="h3" fontSize="lg" fontWeight="light">
            We guarantee a delicious and beautiful cake to your specifications
            in just two days notice!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeList;
