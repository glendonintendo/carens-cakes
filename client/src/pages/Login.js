import { HiOutlineCake } from "react-icons/hi";
import {
  Box,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

import SignupForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };

  return (
    <Flex justifyContent="center" mt="10vh">
      <Box
        bg={bgColor[colorMode]}
        w={["80vw", "60vw", "60vw", "30vw"]}
        p={3}
        boxShadow="sm"
        rounded="lg"
      >
        <Center>
          <Icon as={HiOutlineCake} boxSize={200} />
        </Center>
        <Tabs variant="enclosed-colored" isFitted defaultIndex={1}>
          <TabList>
            <Tab>Sign Up</Tab>
            <Tab>Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignupForm />
            </TabPanel>
            <TabPanel>
              <LoginForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Login;
