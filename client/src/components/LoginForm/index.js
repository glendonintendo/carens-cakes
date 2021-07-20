import { IoLockClosed, IoMail } from "react-icons/io5";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  Icon,
  useColorMode,
} from "@chakra-ui/react";

const LoginForm = () => {
  const { colorMode } = useColorMode();
  const inputBorder = { light: "gray.500", dark: "gray.200" };

  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoMail} />} />
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoLockClosed} />} />
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
          _active={{ boxShadow: "lg" }}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
