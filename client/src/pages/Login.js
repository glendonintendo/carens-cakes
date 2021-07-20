import {
  Box,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { HiOutlineCake } from "react-icons/hi";

import SignupForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Box bg="gray.200" w="350px" p={3} boxShadow="sm" rounded="lg">
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
  );
};

export default Login;
