import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";

import { QUERY_CAKE_FLAVORS } from "../../utils/queries";
import CakeCard from "../CakeCard";

const CakeFlavorPanel = () => {
  const { loading, data: cakeFlavorData } = useQuery(QUERY_CAKE_FLAVORS);

  if (cakeFlavorData) {
    console.log(cakeFlavorData);
  }

  const [chosenFlavor, setChosenFlavor] = useState();

  return (
    <Flex justify="space-between" wrap="wrap" grow={[0, 1, 1, 1]}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        cakeFlavorData.cakeFlavors.map((cakeFlavor) => (
          <CakeCard
            description={cakeFlavor.description}
            image={cakeFlavor.image}
            name={cakeFlavor.name}
          />
        ))
      )}
    </Flex>
  );
};

export default CakeFlavorPanel;
