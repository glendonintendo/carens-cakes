import { Link } from "react-router-dom";
import { Flex, Box, Stack, Icon } from "@chakra-ui/react";
import { HiOutlineCake } from "react-icons/hi";
import { IoCart } from "react-icons/io5";

import Auth from "../../utils/auth";

const Nav = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <Flex w="100vw" align="center" justify="space-around" h="10vh">
      <Box>
        <Link to="/">
          <Icon as={HiOutlineCake} boxSize={50} />
        </Link>
      </Box>
      <Stack justify="center" align="center" isInline spacing={{base: 2, md: 8, lg: 20}} fontSize={{base: '16px', md:"24px"}}>
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/explore">Explore</Link>
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
      <Box>
        <Icon as={IoCart} boxSize={50} />
      </Box>
    </Flex>
  );
};

export default Nav;
