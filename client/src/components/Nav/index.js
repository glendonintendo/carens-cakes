import { Link } from "react-router-dom";
import { Flex, Box, Stack, IconButton, useColorMode } from "@chakra-ui/react";
import { HiOutlineCake } from "react-icons/hi";

import Auth from "../../utils/auth";

import Cart from "../Cart";

const Nav = () => {
  const { toggleColorMode } = useColorMode();

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <Flex w="100vw" align="center" justify="space-around" h="10vh">
      <IconButton
        as={HiOutlineCake}
        boxSize={50}
        bg="transparent"
        onClick={toggleColorMode}
      />
      <Stack
        justify="center"
        align="center"
        isInline
        spacing={[2, 4, 8, 20]}
        fontSize={["16px", "20px", "24px"]}
      >
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/order">Order</Link>
        </Box>
        <Box>
          <Link to="/contact">Contact</Link>
        </Box>
        {Auth.loggedIn() ? (
          <Box>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </Box>
        ) : (
          <Box>
            <Link to="/login">Login</Link>
          </Box>
        )}
      </Stack>

      <Cart />
    </Flex>
  );
};

export default Nav;
