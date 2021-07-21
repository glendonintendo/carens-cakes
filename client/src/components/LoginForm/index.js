import { useState } from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { useMutation } from "@apollo/client";
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

import Auth from "../../utils/auth";
import { LOGIN_USER } from "../../utils/mutations";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const { colorMode } = useColorMode();
  const inputBorder = { light: "gray.500", dark: "gray.200" };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await login({
        variables: { ...formState },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoMail} />} />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoLockClosed} />} />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              aria-label="Password"
              onChange={handleChange}
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
