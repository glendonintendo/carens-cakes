import { IoPhonePortraitOutline, IoMail, IoInformationCircle } from "react-icons/io5";
import {
  Flex,
  Box,
  Text,
  Stack,
  FormControl,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Button,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";

const Contact = () => {
  const handleFormSubmit = () => {};

  const handleChange = () => {};

  const { colorMode } = useColorMode();
  const inputBorder = { light: "gray.500", dark: "gray.200" };
  const bgColor = { light: "gray.200", dark: "gray.700" };

  return (
    <Flex justify="center" mt="10vh">
      <Box
        bg={bgColor[colorMode]}
        w={["80vw", "60vw", "60vw", "30vw"]}
        rounded="lg"
      >
        <Text as="h2" align="center" my="10px" fontSize="2xl" fontWeight="bold">
          Contact Us
        </Text>
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={3} width="90%" mx="auto" my="10px">
            <FormControl isRequired>
              <InputGroup borderColor={inputBorder[colorMode]}>
                <InputLeftElement children={<Icon as={IoInformationCircle} />} />
                <Input
                  type="name"
                  placeholder="Name"
                  aria-label="Name"
                  name="name"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
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
            <FormControl>
              <InputGroup borderColor={inputBorder[colorMode]}>
                <InputLeftElement children={<Icon as={IoPhonePortraitOutline} />} />
                <Input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="XXX-XXX-XXXX"
                  aria-label="Phone number"
                  name="phone"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup borderColor={inputBorder[colorMode]}>
                <Textarea
                  placeholder="Type you email text here."
                  aria-label="Email body"
                  name="body"
                  onChange={handleChange}
                />
              </InputGroup>
              <FormHelperText>
                You have questions and we have answers. Use this form to send an
                email to us and we will get back to you within 24 hours. Your
                email will only be used to respond to your initial query.
              </FormHelperText>
            </FormControl>

            <Button
              type="submit"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
              _active={{ boxShadow: "lg" }}
            >
              Send it!
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Contact;
