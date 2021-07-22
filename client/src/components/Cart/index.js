import { useSelector, useDispatch } from "react-redux";
import { IoCart } from "react-icons/io5";
import {
  IconButton,
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { toggledCart } from "../../utils/cartSlice";

const Cart = () => {
  const { cart, cartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggledCart());
  }

  return (
    <>
      <IconButton as={IoCart} boxSize={50} onClick={toggleCart} bg="transparent" />
      <Drawer
        isOpen={cartOpen}
        placement="right"
        onClose={toggleCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={toggleCart}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
