import { useState } from "react";
import { useMutation } from "@apollo/client";
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

import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

const SignupForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const mutationResponse = await addUser({
        variables: {
          ...formState,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoInformationCircle} />} />
            <Input
              type="name"
              placeholder="First name"
              aria-label="First name"
              name="firstName"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoInformationCircle} />} />
            <Input
              type="name"
              placeholder="Last name"
              aria-label="Last name"
              name="lastName"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <Divider borderColor={inputBorder[colorMode]} />

        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement children={<Icon as={IoMail} />} />
            <Input
              type="email"
              placeholder="Email"
              aria-label="Email"
              name="email"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup borderColor={inputBorder[colorMode]}>
            <InputLeftElement
              children={<Icon as={IoLockClosed} name="password" />}
            />
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
              name="password"
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
          Sign up!
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
