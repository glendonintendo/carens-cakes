import { IoLockClosed, IoMail, IoInformationCircle } from "react-icons/io5";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  Divider,
  Icon,
  useColorMode,
} from "@chakra-ui/react";

const SignupForm = () => {
  const { colorMode } = useColorMode();
  const inputBorder = { light: "gray.500", dark: "gray.200" };

  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoInformationCircle} />} />
            <Input
              type="name"
              placeholder="First name"
              aria-label="First name"
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoInformationCircle} />} />
            <Input type="name" placeholder="Last name" aria-label="Last name" />
          </InputGroup>
        </FormControl>

        <Divider  borderColor={inputBorder[colorMode]} />

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
          Sign up!
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
