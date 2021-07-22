import { useSelector, useDispatch } from "react-redux";
import { IoCart } from "react-icons/io5";
import {
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { toggledCart } from "../../utils/cartSlice";
import Auth from "../../utils/auth";

const Cart = () => {
  const { cart, cartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggledCart());
  };

  return (
    <>
      <IconButton
        as={IoCart}
        boxSize={50}
        onClick={toggleCart}
        bg="transparent"
      />
      <Drawer isOpen={cartOpen} placement="right" onClose={toggleCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            {!cart.length && (
              <div>
                You don't have anything in your cart!{" "}
                <span role="img" aria-label="shocked">
                  😱
                </span>
              </div>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={toggleCart}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              isDisabled={!Auth.loggedIn() || cart.length === 0}
              title={
                Auth.loggedIn()
                  ? "Checkout"
                  : "You must be logged in to checkout!"
              }
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
