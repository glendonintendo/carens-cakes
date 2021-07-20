import { Box, Text } from "@chakra-ui/react";

import HomeList from "../components/HomeList";

const Home = () => {
  return (
    <>
      <Box w={["80vw", "80vw", "90vw", "70vw"]} mx="auto" mt="10vh">
        <Text as="h1" fontSize="50px" fontWeight="bold">
          We make getting custom cakes as easy as...
        </Text>
      </Box>
      <HomeList />
    </>
  );
};

export default Home;
